// package: nest.trait.sensor
// file: nest.sensor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TemperatureTrait extends jspb.Message {
  hasTemperatureValue(): boolean;
  clearTemperatureValue(): void;
  getTemperatureValue(): TemperatureTrait.TemperatureSample | undefined;
  setTemperatureValue(value?: TemperatureTrait.TemperatureSample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemperatureTrait.AsObject;
  static toObject(includeInstance: boolean, msg: TemperatureTrait): TemperatureTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemperatureTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemperatureTrait;
  static deserializeBinaryFromReader(message: TemperatureTrait, reader: jspb.BinaryReader): TemperatureTrait;
}

export namespace TemperatureTrait {
  export type AsObject = {
    temperatureValue?: TemperatureTrait.TemperatureSample.AsObject,
  }

  export class TemperatureSample extends jspb.Message {
    hasTemperature(): boolean;
    clearTemperature(): void;
    getTemperature(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setTemperature(value?: google_protobuf_wrappers_pb.FloatValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemperatureSample.AsObject;
    static toObject(includeInstance: boolean, msg: TemperatureSample): TemperatureSample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemperatureSample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemperatureSample;
    static deserializeBinaryFromReader(message: TemperatureSample, reader: jspb.BinaryReader): TemperatureSample;
  }

  export namespace TemperatureSample {
    export type AsObject = {
      temperature?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
  }
}

export class HumidityTrait extends jspb.Message {
  hasHumidityValue(): boolean;
  clearHumidityValue(): void;
  getHumidityValue(): HumidityTrait.HumiditySample | undefined;
  setHumidityValue(value?: HumidityTrait.HumiditySample): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumidityTrait.AsObject;
  static toObject(includeInstance: boolean, msg: HumidityTrait): HumidityTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumidityTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumidityTrait;
  static deserializeBinaryFromReader(message: HumidityTrait, reader: jspb.BinaryReader): HumidityTrait;
}

export namespace HumidityTrait {
  export type AsObject = {
    humidityValue?: HumidityTrait.HumiditySample.AsObject,
  }

  export class HumiditySample extends jspb.Message {
    hasHumidity(): boolean;
    clearHumidity(): void;
    getHumidity(): google_protobuf_wrappers_pb.FloatValue | undefined;
    setHumidity(value?: google_protobuf_wrappers_pb.FloatValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HumiditySample.AsObject;
    static toObject(includeInstance: boolean, msg: HumiditySample): HumiditySample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HumiditySample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HumiditySample;
    static deserializeBinaryFromReader(message: HumiditySample, reader: jspb.BinaryReader): HumiditySample;
  }

  export namespace HumiditySample {
    export type AsObject = {
      humidity?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    }
  }
}

