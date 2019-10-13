/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.nest.trait.sensor.HumidityTrait', null, global);
goog.exportSymbol('proto.nest.trait.sensor.HumidityTrait.HumiditySample', null, global);
goog.exportSymbol('proto.nest.trait.sensor.TemperatureTrait', null, global);
goog.exportSymbol('proto.nest.trait.sensor.TemperatureTrait.TemperatureSample', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nest.trait.sensor.TemperatureTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.sensor.TemperatureTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.sensor.TemperatureTrait.displayName = 'proto.nest.trait.sensor.TemperatureTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.sensor.TemperatureTrait.TemperatureSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.displayName = 'proto.nest.trait.sensor.TemperatureTrait.TemperatureSample';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nest.trait.sensor.HumidityTrait = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.sensor.HumidityTrait, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.sensor.HumidityTrait.displayName = 'proto.nest.trait.sensor.HumidityTrait';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.nest.trait.sensor.HumidityTrait.HumiditySample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.nest.trait.sensor.HumidityTrait.HumiditySample.displayName = 'proto.nest.trait.sensor.HumidityTrait.HumiditySample';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nest.trait.sensor.TemperatureTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.sensor.TemperatureTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.sensor.TemperatureTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.TemperatureTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperatureValue: (f = msg.getTemperatureValue()) && proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nest.trait.sensor.TemperatureTrait}
 */
proto.nest.trait.sensor.TemperatureTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.sensor.TemperatureTrait;
  return proto.nest.trait.sensor.TemperatureTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.sensor.TemperatureTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.sensor.TemperatureTrait}
 */
proto.nest.trait.sensor.TemperatureTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.sensor.TemperatureTrait.TemperatureSample;
      reader.readMessage(value,proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.deserializeBinaryFromReader);
      msg.setTemperatureValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nest.trait.sensor.TemperatureTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.sensor.TemperatureTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.sensor.TemperatureTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.TemperatureTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperatureValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.sensor.TemperatureTrait.TemperatureSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperature: (f = msg.getTemperature()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nest.trait.sensor.TemperatureTrait.TemperatureSample}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.sensor.TemperatureTrait.TemperatureSample;
  return proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.sensor.TemperatureTrait.TemperatureSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.sensor.TemperatureTrait.TemperatureSample}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setTemperature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.sensor.TemperatureTrait.TemperatureSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperature();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FloatValue temperature = 1;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.getTemperature = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 1));
};


/** @param {?proto.google.protobuf.FloatValue|undefined} value */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.setTemperature = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.clearTemperature = function() {
  this.setTemperature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.sensor.TemperatureTrait.TemperatureSample.prototype.hasTemperature = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TemperatureSample temperature_value = 1;
 * @return {?proto.nest.trait.sensor.TemperatureTrait.TemperatureSample}
 */
proto.nest.trait.sensor.TemperatureTrait.prototype.getTemperatureValue = function() {
  return /** @type{?proto.nest.trait.sensor.TemperatureTrait.TemperatureSample} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.sensor.TemperatureTrait.TemperatureSample, 1));
};


/** @param {?proto.nest.trait.sensor.TemperatureTrait.TemperatureSample|undefined} value */
proto.nest.trait.sensor.TemperatureTrait.prototype.setTemperatureValue = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.nest.trait.sensor.TemperatureTrait.prototype.clearTemperatureValue = function() {
  this.setTemperatureValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.sensor.TemperatureTrait.prototype.hasTemperatureValue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nest.trait.sensor.HumidityTrait.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.sensor.HumidityTrait.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.sensor.HumidityTrait} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.HumidityTrait.toObject = function(includeInstance, msg) {
  var f, obj = {
    humidityValue: (f = msg.getHumidityValue()) && proto.nest.trait.sensor.HumidityTrait.HumiditySample.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nest.trait.sensor.HumidityTrait}
 */
proto.nest.trait.sensor.HumidityTrait.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.sensor.HumidityTrait;
  return proto.nest.trait.sensor.HumidityTrait.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.sensor.HumidityTrait} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.sensor.HumidityTrait}
 */
proto.nest.trait.sensor.HumidityTrait.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.nest.trait.sensor.HumidityTrait.HumiditySample;
      reader.readMessage(value,proto.nest.trait.sensor.HumidityTrait.HumiditySample.deserializeBinaryFromReader);
      msg.setHumidityValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nest.trait.sensor.HumidityTrait.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.sensor.HumidityTrait.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.sensor.HumidityTrait} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.HumidityTrait.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHumidityValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.nest.trait.sensor.HumidityTrait.HumiditySample.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.toObject = function(opt_includeInstance) {
  return proto.nest.trait.sensor.HumidityTrait.HumiditySample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.nest.trait.sensor.HumidityTrait.HumiditySample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.toObject = function(includeInstance, msg) {
  var f, obj = {
    humidity: (f = msg.getHumidity()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.nest.trait.sensor.HumidityTrait.HumiditySample}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.nest.trait.sensor.HumidityTrait.HumiditySample;
  return proto.nest.trait.sensor.HumidityTrait.HumiditySample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.nest.trait.sensor.HumidityTrait.HumiditySample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.nest.trait.sensor.HumidityTrait.HumiditySample}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setHumidity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.nest.trait.sensor.HumidityTrait.HumiditySample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.nest.trait.sensor.HumidityTrait.HumiditySample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHumidity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FloatValue humidity = 1;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.getHumidity = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 1));
};


/** @param {?proto.google.protobuf.FloatValue|undefined} value */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.setHumidity = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.clearHumidity = function() {
  this.setHumidity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.sensor.HumidityTrait.HumiditySample.prototype.hasHumidity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HumiditySample humidity_value = 1;
 * @return {?proto.nest.trait.sensor.HumidityTrait.HumiditySample}
 */
proto.nest.trait.sensor.HumidityTrait.prototype.getHumidityValue = function() {
  return /** @type{?proto.nest.trait.sensor.HumidityTrait.HumiditySample} */ (
    jspb.Message.getWrapperField(this, proto.nest.trait.sensor.HumidityTrait.HumiditySample, 1));
};


/** @param {?proto.nest.trait.sensor.HumidityTrait.HumiditySample|undefined} value */
proto.nest.trait.sensor.HumidityTrait.prototype.setHumidityValue = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.nest.trait.sensor.HumidityTrait.prototype.clearHumidityValue = function() {
  this.setHumidityValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.nest.trait.sensor.HumidityTrait.prototype.hasHumidityValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.nest.trait.sensor);
