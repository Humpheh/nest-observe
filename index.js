const fetch = require('node-fetch');
const uuid = require('uuid');
const EventEmitter = require('events');
const authGoogle = require('./auth');

const {
    ObserveRequest,
    ObserveResponse,
    TraitTypeObserveParams,
} = require('./protobuf/js/nest.gateway_pb');
const { StreamBody } = require('./protobuf/js/streambody_pb');
const traits = require('./protobuf/traits');

// Import all of the trait protobufs
require('./protobuf/js/nest.hvac_pb');
require('./protobuf/js/nest.located_pb');
require('./protobuf/js/nest.sensor_pb');
require('./protobuf/js/nest.service_pb');
require('./protobuf/js/nest.structure_pb');
require('./protobuf/js/weave.description_pb');
require('./protobuf/js/weave.common_pb');

const SERVICE_HOST = 'https://grpc-web.production.nest.com';
const GATEWAY_URL = SERVICE_HOST + '/nestlabs.gateway.v2.GatewayService';

const newObserveRequest = () => {
    let request = new ObserveRequest();
    request.setStateTypesListList([2, 1]);
    request.setTraitTypeParamsList(
        traits.map(trait => {
            const params = new TraitTypeObserveParams();
            params.setTraitType(trait);
            return params;
        })
    );
    return request;
};

const deserializeNestMessage = value => {
    const type = value.getTypeUrl().replace('type.nestlabs.com/', '');
    const path = type.split('.');
    let location = global.proto;
    for (const p of path) {
        location = location[p];
        if (!location) {
            return null;
        }
    }
    const buffer = Buffer.from(value.getValue(), 'base64');
    return location.deserializeBinary(buffer);
};

const decodeObserveContent = (content, protobuf = false) => {
    const state = {};
    for (const ts of content.getTraitStatesList()) {
        const resourceID = ts.getTraitId().getResourceId();
        const patchValues = ts.getPatch().getValues();

        // Get the resource and create a new one if it does not exist
        let resource = state[resourceID];
        if (!resource) {
            resource = { ignored: [], traits: [] };
            state[resourceID] = resource;
        }

        // Deserialize the message and push to the relevant list if processed.
        const value = deserializeNestMessage(patchValues);
        if (!value) {
            resource.ignored.push({
                type: patchValues.getTypeName(),
                value: patchValues.getValue_asB64(),
            });
        } else {
            resource.traits.push({
                type: patchValues.getTypeName(),
                label: ts.getTraitId().getTraitLabel(),
                value: protobuf ? value : value.toObject(false),
            });
        }
    }
    return state;
};

/**
 * Get an observer on the Observe endpoint that will emit data events with
 * new home state information. The end event will be omitted when the stream
 * is closed.
 *
 * @param token
 * @param options
 * @returns {Promise<module:events.internal>}
 */
const observe = async (token, options = {}) => {
    const debug = (...msgs) => options.debug && console.log(...msgs);
    const emitter = new EventEmitter();

    // Start a request to the grpc-web Observe endpoint.
    const request = newObserveRequest();
    const stream = await fetch(GATEWAY_URL + '/Observe', {
        method: 'POST',
        headers: {
            Origin: 'https://home.nest.com',
            Referer: 'https://home.nest.com/',
            'Content-Type': 'application/x-protobuf',
            'X-Accept-Content-Transfer-Encoding': 'base64',
            'X-Accept-Response-Streaming': 'true',
            Authorization: 'Basic ' + token,
            'request-id': uuid(),
            'X-nl-webapp-version':
                'NlAppSDKVersion/8.15.0 NlSchemaVersion/2.1.20-87-gce5742894',
        },
        body: request.serializeBinary(),
    });
    const body = await stream.body;

    let buffer = []; // not actually a buffer
    const attemptDecodeStreamBody = () => {
        let messages = [];
        try {
            // Attempt to decode the value from the buffer.
            const concat = Buffer.from(buffer);
            const value = concat.toString('utf-8');
            const valueEncoded = Buffer.from(value, 'base64');

            // Attempt to deserialize the value into the StreamBody message. If successful,
            // we assume that a full protobuf message has been streamed. This will raise an
            // error if the buffer is an incomplete message, so we use this as an indication
            // that we should wait for more chunks (this is not ideal).
            // TODO: change this, it is hacky
            const response = StreamBody.deserializeBinary(valueEncoded);
            buffer = []; // Clear the buffer so we can start buffering new messages
            messages = response
                .getMessageList()
                .map(ObserveResponse.deserializeBinary);
        } catch (e) {
            debug('failed to decode stream body', e);
            return false;
        }

        // Decode each of the messages in the stream body and emit the new data state
        for (const msg of messages) {
            const state = decodeObserveContent(msg, options.protobuf);
            emitter.emit('data', state);
        }
    };

    body.on('data', chunk => {
        buffer.push(...chunk);

        // For each chunk of data we retrieve, see if it completes a protobuf message. If
        // it does, then can emit the new state from that message. In general, most chunks
        // will contain an incomplete message, so we just ignore it and wait for the next
        // ones.
        attemptDecodeStreamBody();
    });

    // TODO: check these don't ignore any useful information
    body.on('end', () => emitter.emit('end'));
    body.on('error', error => emitter.emit('end', error));
    body.on('close', () => emitter.emit('end'));
    return emitter;
};

module.exports = { authGoogle, observe };
