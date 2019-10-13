// package: nest.trait.located
// file: nest.located.proto

import * as jspb from "google-protobuf";
import * as weave_common_pb from "./weave.common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LocatedAnnotationsTrait extends jspb.Message {
  getPredefinedWheresMapMap(): jspb.Map<number, LocatedAnnotationsTrait.WhereItem>;
  clearPredefinedWheresMapMap(): void;
  getCustomWheresMapMap(): jspb.Map<number, LocatedAnnotationsTrait.WhereItem>;
  clearCustomWheresMapMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocatedAnnotationsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: LocatedAnnotationsTrait): LocatedAnnotationsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocatedAnnotationsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocatedAnnotationsTrait;
  static deserializeBinaryFromReader(message: LocatedAnnotationsTrait, reader: jspb.BinaryReader): LocatedAnnotationsTrait;
}

export namespace LocatedAnnotationsTrait {
  export type AsObject = {
    predefinedWheresMapMap: Array<[number, LocatedAnnotationsTrait.WhereItem.AsObject]>,
    customWheresMapMap: Array<[number, LocatedAnnotationsTrait.WhereItem.AsObject]>,
  }

  export class WhereItem extends jspb.Message {
    hasResourceId(): boolean;
    clearResourceId(): void;
    getResourceId(): weave_common_pb.ResourceId | undefined;
    setResourceId(value?: weave_common_pb.ResourceId): void;

    hasLabel(): boolean;
    clearLabel(): void;
    getLabel(): weave_common_pb.StringRef | undefined;
    setLabel(value?: weave_common_pb.StringRef): void;

    getLegacyUuid(): string;
    setLegacyUuid(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhereItem.AsObject;
    static toObject(includeInstance: boolean, msg: WhereItem): WhereItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhereItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhereItem;
    static deserializeBinaryFromReader(message: WhereItem, reader: jspb.BinaryReader): WhereItem;
  }

  export namespace WhereItem {
    export type AsObject = {
      resourceId?: weave_common_pb.ResourceId.AsObject,
      label?: weave_common_pb.StringRef.AsObject,
      legacyUuid: string,
    }
  }

  export interface StatusCodeMap {
    STATUS_CODE_UNSPECIFIED: 0;
    STATUS_CODE_SUCCESS: 1;
    STATUS_CODE_FAILURE: 2;
    STATUS_CODE_MISSING_LABEL: 4096;
    STATUS_CODE_ANNOTATION_EXISTS: 4097;
    STATUS_CODE_MISSING_ANNOTATION: 8192;
    STATUS_CODE_ANNOTATION_DOESNT_EXIST: 8193;
  }

  export const StatusCode: StatusCodeMap;
}

export class DeviceLocatedSettingsTrait extends jspb.Message {
  hasWhereAnnotationRid(): boolean;
  clearWhereAnnotationRid(): void;
  getWhereAnnotationRid(): weave_common_pb.ResourceId | undefined;
  setWhereAnnotationRid(value?: weave_common_pb.ResourceId): void;

  hasFixtureAnnotationRid(): boolean;
  clearFixtureAnnotationRid(): void;
  getFixtureAnnotationRid(): weave_common_pb.ResourceId | undefined;
  setFixtureAnnotationRid(value?: weave_common_pb.ResourceId): void;

  hasWhereLabel(): boolean;
  clearWhereLabel(): void;
  getWhereLabel(): weave_common_pb.StringRef | undefined;
  setWhereLabel(value?: weave_common_pb.StringRef): void;

  hasWhereSpokenAnnotationRids(): boolean;
  clearWhereSpokenAnnotationRids(): void;
  getWhereSpokenAnnotationRids(): weave_common_pb.ResourceId | undefined;
  setWhereSpokenAnnotationRids(value?: weave_common_pb.ResourceId): void;

  hasFixtureNameLabel(): boolean;
  clearFixtureNameLabel(): void;
  getFixtureNameLabel(): weave_common_pb.StringRef | undefined;
  setFixtureNameLabel(value?: weave_common_pb.StringRef): void;

  hasFixtureSpokenAnnotationRids(): boolean;
  clearFixtureSpokenAnnotationRids(): void;
  getFixtureSpokenAnnotationRids(): weave_common_pb.ResourceId | undefined;
  setFixtureSpokenAnnotationRids(value?: weave_common_pb.ResourceId): void;

  hasLastModifiedTimestamp(): boolean;
  clearLastModifiedTimestamp(): void;
  getLastModifiedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModifiedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastRelocationTimestamp(): boolean;
  clearLastRelocationTimestamp(): void;
  getLastRelocationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastRelocationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getWhereLegacyUuid(): string;
  setWhereLegacyUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceLocatedSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceLocatedSettingsTrait): DeviceLocatedSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceLocatedSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceLocatedSettingsTrait;
  static deserializeBinaryFromReader(message: DeviceLocatedSettingsTrait, reader: jspb.BinaryReader): DeviceLocatedSettingsTrait;
}

export namespace DeviceLocatedSettingsTrait {
  export type AsObject = {
    whereAnnotationRid?: weave_common_pb.ResourceId.AsObject,
    fixtureAnnotationRid?: weave_common_pb.ResourceId.AsObject,
    whereLabel?: weave_common_pb.StringRef.AsObject,
    whereSpokenAnnotationRids?: weave_common_pb.ResourceId.AsObject,
    fixtureNameLabel?: weave_common_pb.StringRef.AsObject,
    fixtureSpokenAnnotationRids?: weave_common_pb.ResourceId.AsObject,
    lastModifiedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastRelocationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    whereLegacyUuid: string,
  }
}

