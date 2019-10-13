// package: weave.trait.description
// file: weave.description.proto

import * as jspb from "google-protobuf";

export class DeviceIdentityTrait extends jspb.Message {
  getVendorId(): number;
  setVendorId(value: number): void;

  getVendorProductId(): number;
  setVendorProductId(value: number): void;

  getProductRevision(): number;
  setProductRevision(value: number): void;

  getSerialNumber(): string;
  setSerialNumber(value: string): void;

  getSoftwareVersion(): string;
  setSoftwareVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceIdentityTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceIdentityTrait): DeviceIdentityTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceIdentityTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceIdentityTrait;
  static deserializeBinaryFromReader(message: DeviceIdentityTrait, reader: jspb.BinaryReader): DeviceIdentityTrait;
}

export namespace DeviceIdentityTrait {
  export type AsObject = {
    vendorId: number,
    vendorProductId: number,
    productRevision: number,
    serialNumber: string,
    softwareVersion: string,
  }
}

