// package: nest.trait.service
// file: nest.service.proto

import * as jspb from "google-protobuf";

export class DeviceInfoTrait extends jspb.Message {
  getTypeName(): string;
  setTypeName(value: string): void;

  getClassName(): string;
  setClassName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfoTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfoTrait): DeviceInfoTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfoTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfoTrait;
  static deserializeBinaryFromReader(message: DeviceInfoTrait, reader: jspb.BinaryReader): DeviceInfoTrait;
}

export namespace DeviceInfoTrait {
  export type AsObject = {
    typeName: string,
    className: string,
  }
}

