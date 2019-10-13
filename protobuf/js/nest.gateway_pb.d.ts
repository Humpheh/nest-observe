// package: nestlabs.gateway.v2
// file: nest.gateway.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ObserveRequest extends jspb.Message {
  clearStateTypesListList(): void;
  getStateTypesListList(): Array<number>;
  setStateTypesListList(value: Array<number>): void;
  addStateTypesList(value: number, index?: number): number;

  clearTraitTypeParamsList(): void;
  getTraitTypeParamsList(): Array<TraitTypeObserveParams>;
  setTraitTypeParamsList(value: Array<TraitTypeObserveParams>): void;
  addTraitTypeParams(value?: TraitTypeObserveParams, index?: number): TraitTypeObserveParams;

  clearTraitInstanceParamsList(): void;
  getTraitInstanceParamsList(): Array<TraitInstanceObserveParams>;
  setTraitInstanceParamsList(value: Array<TraitInstanceObserveParams>): void;
  addTraitInstanceParams(value?: TraitInstanceObserveParams, index?: number): TraitInstanceObserveParams;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveRequest): ObserveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveRequest;
  static deserializeBinaryFromReader(message: ObserveRequest, reader: jspb.BinaryReader): ObserveRequest;
}

export namespace ObserveRequest {
  export type AsObject = {
    stateTypesListList: Array<number>,
    traitTypeParamsList: Array<TraitTypeObserveParams.AsObject>,
    traitInstanceParamsList: Array<TraitInstanceObserveParams.AsObject>,
    userId: string,
  }
}

export class TraitInstanceObserveParams extends jspb.Message {
  hasTraitId(): boolean;
  clearTraitId(): void;
  getTraitId(): TraitId | undefined;
  setTraitId(value?: TraitId): void;

  getMonotonicVersionFiltersList(): number;
  setMonotonicVersionFiltersList(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitInstanceObserveParams.AsObject;
  static toObject(includeInstance: boolean, msg: TraitInstanceObserveParams): TraitInstanceObserveParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitInstanceObserveParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitInstanceObserveParams;
  static deserializeBinaryFromReader(message: TraitInstanceObserveParams, reader: jspb.BinaryReader): TraitInstanceObserveParams;
}

export namespace TraitInstanceObserveParams {
  export type AsObject = {
    traitId?: TraitId.AsObject,
    monotonicVersionFiltersList: number,
  }
}

export class TraitTypeObserveParams extends jspb.Message {
  getTraitType(): string;
  setTraitType(value: string): void;

  hasStateFieldMask(): boolean;
  clearStateFieldMask(): void;
  getStateFieldMask(): FieldMask | undefined;
  setStateFieldMask(value?: FieldMask): void;

  getObserverSchemaVersion(): number;
  setObserverSchemaVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitTypeObserveParams.AsObject;
  static toObject(includeInstance: boolean, msg: TraitTypeObserveParams): TraitTypeObserveParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitTypeObserveParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitTypeObserveParams;
  static deserializeBinaryFromReader(message: TraitTypeObserveParams, reader: jspb.BinaryReader): TraitTypeObserveParams;
}

export namespace TraitTypeObserveParams {
  export type AsObject = {
    traitType: string,
    stateFieldMask?: FieldMask.AsObject,
    observerSchemaVersion: number,
  }
}

export class FieldMask extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldMask.AsObject;
  static toObject(includeInstance: boolean, msg: FieldMask): FieldMask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldMask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldMask;
  static deserializeBinaryFromReader(message: FieldMask, reader: jspb.BinaryReader): FieldMask;
}

export namespace FieldMask {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class ObserveResponse extends jspb.Message {
  clearResourceMetasList(): void;
  getResourceMetasList(): Array<ResourceMeta>;
  setResourceMetasList(value: Array<ResourceMeta>): void;
  addResourceMetas(value?: ResourceMeta, index?: number): ResourceMeta;

  getInitialResourceMetasContinue(): boolean;
  setInitialResourceMetasContinue(value: boolean): void;

  clearTraitStatesList(): void;
  getTraitStatesList(): Array<TraitState>;
  setTraitStatesList(value: Array<TraitState>): void;
  addTraitStates(value?: TraitState, index?: number): TraitState;

  clearTraitOperationListsList(): void;
  getTraitOperationListsList(): Array<TraitOperationList>;
  setTraitOperationListsList(value: Array<TraitOperationList>): void;
  addTraitOperationLists(value?: TraitOperationList, index?: number): TraitOperationList;

  hasCurrentTime(): boolean;
  clearCurrentTime(): void;
  getCurrentTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCurrentTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObserveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ObserveResponse): ObserveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObserveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObserveResponse;
  static deserializeBinaryFromReader(message: ObserveResponse, reader: jspb.BinaryReader): ObserveResponse;
}

export namespace ObserveResponse {
  export type AsObject = {
    resourceMetasList: Array<ResourceMeta.AsObject>,
    initialResourceMetasContinue: boolean,
    traitStatesList: Array<TraitState.AsObject>,
    traitOperationListsList: Array<TraitOperationList.AsObject>,
    currentTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TraitOperationList extends jspb.Message {
  hasTraitId(): boolean;
  clearTraitId(): void;
  getTraitId(): TraitId | undefined;
  setTraitId(value?: TraitId): void;

  clearTraitOperationsList(): void;
  getTraitOperationsList(): Array<TraitOperation>;
  setTraitOperationsList(value: Array<TraitOperation>): void;
  addTraitOperations(value?: TraitOperation, index?: number): TraitOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitOperationList.AsObject;
  static toObject(includeInstance: boolean, msg: TraitOperationList): TraitOperationList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitOperationList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitOperationList;
  static deserializeBinaryFromReader(message: TraitOperationList, reader: jspb.BinaryReader): TraitOperationList;
}

export namespace TraitOperationList {
  export type AsObject = {
    traitId?: TraitId.AsObject,
    traitOperationsList: Array<TraitOperation.AsObject>,
  }
}

export class TraitOperation extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitOperation.AsObject;
  static toObject(includeInstance: boolean, msg: TraitOperation): TraitOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitOperation;
  static deserializeBinaryFromReader(message: TraitOperation, reader: jspb.BinaryReader): TraitOperation;
}

export namespace TraitOperation {
  export type AsObject = {
  }
}

export class ResourceMeta extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearTraitMetasList(): void;
  getTraitMetasList(): Array<TraitMeta>;
  setTraitMetasList(value: Array<TraitMeta>): void;
  addTraitMetas(value?: TraitMeta, index?: number): TraitMeta;

  getSchemaVersion(): number;
  setSchemaVersion(value: number): void;

  clearIfaceMetasList(): void;
  getIfaceMetasList(): Array<IfaceMeta>;
  setIfaceMetasList(value: Array<IfaceMeta>): void;
  addIfaceMetas(value?: IfaceMeta, index?: number): IfaceMeta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceMeta.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceMeta): ResourceMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceMeta;
  static deserializeBinaryFromReader(message: ResourceMeta, reader: jspb.BinaryReader): ResourceMeta;
}

export namespace ResourceMeta {
  export type AsObject = {
    resourceId: string,
    type: string,
    traitMetasList: Array<TraitMeta.AsObject>,
    schemaVersion: number,
    ifaceMetasList: Array<IfaceMeta.AsObject>,
  }
}

export class TraitState extends jspb.Message {
  hasTraitId(): boolean;
  clearTraitId(): void;
  getTraitId(): TraitId | undefined;
  setTraitId(value?: TraitId): void;

  hasPatch(): boolean;
  clearPatch(): void;
  getPatch(): Patch | undefined;
  setPatch(value?: Patch): void;

  getMonotonicVersion(): number;
  setMonotonicVersion(value: number): void;

  getPublisherVersion(): number;
  setPublisherVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitState.AsObject;
  static toObject(includeInstance: boolean, msg: TraitState): TraitState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitState;
  static deserializeBinaryFromReader(message: TraitState, reader: jspb.BinaryReader): TraitState;
}

export namespace TraitState {
  export type AsObject = {
    traitId?: TraitId.AsObject,
    patch?: Patch.AsObject,
    monotonicVersion: number,
    publisherVersion: number,
  }
}

export class TraitMeta extends jspb.Message {
  getTraitLabel(): string;
  setTraitLabel(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasSchemaVersion(): boolean;
  clearSchemaVersion(): void;
  getSchemaVersion(): SchemaVersion | undefined;
  setSchemaVersion(value?: SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TraitMeta): TraitMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitMeta;
  static deserializeBinaryFromReader(message: TraitMeta, reader: jspb.BinaryReader): TraitMeta;
}

export namespace TraitMeta {
  export type AsObject = {
    traitLabel: string,
    type: string,
    schemaVersion?: SchemaVersion.AsObject,
  }
}

export class TraitId extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  getTraitLabel(): string;
  setTraitLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitId.AsObject;
  static toObject(includeInstance: boolean, msg: TraitId): TraitId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraitId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitId;
  static deserializeBinaryFromReader(message: TraitId, reader: jspb.BinaryReader): TraitId;
}

export namespace TraitId {
  export type AsObject = {
    resourceId: string,
    traitLabel: string,
  }
}

export class IfaceMeta extends jspb.Message {
  getIfaceLabel(): string;
  setIfaceLabel(value: string): void;

  getType(): string;
  setType(value: string): void;

  getTraitLabelMappingMap(): jspb.Map<string, string>;
  clearTraitLabelMappingMap(): void;
  hasSchemaVersion(): boolean;
  clearSchemaVersion(): void;
  getSchemaVersion(): SchemaVersion | undefined;
  setSchemaVersion(value?: SchemaVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IfaceMeta.AsObject;
  static toObject(includeInstance: boolean, msg: IfaceMeta): IfaceMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IfaceMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IfaceMeta;
  static deserializeBinaryFromReader(message: IfaceMeta, reader: jspb.BinaryReader): IfaceMeta;
}

export namespace IfaceMeta {
  export type AsObject = {
    ifaceLabel: string,
    type: string,
    traitLabelMappingMap: Array<[string, string]>,
    schemaVersion?: SchemaVersion.AsObject,
  }
}

export class Patch extends jspb.Message {
  hasValues(): boolean;
  clearValues(): void;
  getValues(): google_protobuf_any_pb.Any | undefined;
  setValues(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Patch.AsObject;
  static toObject(includeInstance: boolean, msg: Patch): Patch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Patch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Patch;
  static deserializeBinaryFromReader(message: Patch, reader: jspb.BinaryReader): Patch;
}

export namespace Patch {
  export type AsObject = {
    values?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class SchemaVersion extends jspb.Message {
  getCurrentVersion(): number;
  setCurrentVersion(value: number): void;

  getMinCompatVersion(): number;
  setMinCompatVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchemaVersion.AsObject;
  static toObject(includeInstance: boolean, msg: SchemaVersion): SchemaVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchemaVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchemaVersion;
  static deserializeBinaryFromReader(message: SchemaVersion, reader: jspb.BinaryReader): SchemaVersion;
}

export namespace SchemaVersion {
  export type AsObject = {
    currentVersion: number,
    minCompatVersion: number,
  }
}

