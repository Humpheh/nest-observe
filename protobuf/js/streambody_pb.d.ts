// package: google.rpc
// file: streambody.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearDetailsList(): void;
  getDetailsList(): Array<google_protobuf_any_pb.Any>;
  setDetailsList(value: Array<google_protobuf_any_pb.Any>): void;
  addDetails(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    message: string,
    detailsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class StreamBody extends jspb.Message {
  clearMessageList(): void;
  getMessageList(): Array<Uint8Array | string>;
  getMessageList_asU8(): Array<Uint8Array>;
  getMessageList_asB64(): Array<string>;
  setMessageList(value: Array<Uint8Array | string>): void;
  addMessage(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Status | undefined;
  setStatus(value?: Status): void;

  clearNoopList(): void;
  getNoopList(): Array<Uint8Array | string>;
  getNoopList_asU8(): Array<Uint8Array>;
  getNoopList_asB64(): Array<string>;
  setNoopList(value: Array<Uint8Array | string>): void;
  addNoop(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBody.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBody): StreamBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBody;
  static deserializeBinaryFromReader(message: StreamBody, reader: jspb.BinaryReader): StreamBody;
}

export namespace StreamBody {
  export type AsObject = {
    messageList: Array<Uint8Array | string>,
    status?: Status.AsObject,
    noopList: Array<Uint8Array | string>,
  }
}

