// package: weave.common
// file: weave.common.proto

import * as jspb from "google-protobuf";

export class ResourceId extends jspb.Message {
  getResourceId(): string;
  setResourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceId.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceId): ResourceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceId;
  static deserializeBinaryFromReader(message: ResourceId, reader: jspb.BinaryReader): ResourceId;
}

export namespace ResourceId {
  export type AsObject = {
    resourceId: string,
  }
}

export class StringRef extends jspb.Message {
  getLiteral(): string;
  setLiteral(value: string): void;

  getReference(): number;
  setReference(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringRef.AsObject;
  static toObject(includeInstance: boolean, msg: StringRef): StringRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringRef;
  static deserializeBinaryFromReader(message: StringRef, reader: jspb.BinaryReader): StringRef;
}

export namespace StringRef {
  export type AsObject = {
    literal: string,
    reference: number,
  }
}

export interface DayOfWeekMap {
  DAY_OF_WEEK_UNSPECIFIED: 0;
  DAY_OF_WEEK_SUNDAY: 1;
  DAY_OF_WEEK_MONDAY: 2;
  DAY_OF_WEEK_TUESDAY: 4;
  DAY_OF_WEEK_WEDNESDAY: 8;
  DAY_OF_WEEK_THURSDAY: 16;
  DAY_OF_WEEK_FRIDAY: 32;
  DAY_OF_WEEK_SATURDAY: 64;
}

export const DayOfWeek: DayOfWeekMap;

export interface MonthOfYearMap {
  MONTH_OF_YEAR_UNSPECIFIED: 0;
  MONTH_OF_YEAR_JANUARY: 1;
  MONTH_OF_YEAR_FEBRUARY: 2;
  MONTH_OF_YEAR_MARCH: 4;
  MONTH_OF_YEAR_APRIL: 8;
  MONTH_OF_YEAR_MAY: 16;
  MONTH_OF_YEAR_JUNE: 32;
  MONTH_OF_YEAR_JULY: 64;
  MONTH_OF_YEAR_AUGUST: 128;
  MONTH_OF_YEAR_SEPTEMBER: 256;
  MONTH_OF_YEAR_OCTOBER: 512;
  MONTH_OF_YEAR_NOVEMBER: 1024;
  MONTH_OF_YEAR_DECEMBER: 2048;
}

export const MonthOfYear: MonthOfYearMap;

