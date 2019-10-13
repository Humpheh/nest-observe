// package: nestlabs.gateway.v2
// file: nest.gateway.proto

var nest_gateway_pb = require("./nest.gateway_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var GatewayService = (function () {
  function GatewayService() {}
  GatewayService.serviceName = "nestlabs.gateway.v2.GatewayService";
  return GatewayService;
}());

GatewayService.Observe = {
  methodName: "Observe",
  service: GatewayService,
  requestStream: false,
  responseStream: true,
  requestType: nest_gateway_pb.ObserveRequest,
  responseType: nest_gateway_pb.ObserveResponse
};

exports.GatewayService = GatewayService;

function GatewayServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

GatewayServiceClient.prototype.observe = function observe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(GatewayService.Observe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.GatewayServiceClient = GatewayServiceClient;

