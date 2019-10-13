// package: nest.trait.structure
// file: nest.structure.proto

import * as jspb from "google-protobuf";
import * as weave_common_pb from "./weave.common_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class HomeInfoSettingsTrait extends jspb.Message {
  getHouseType(): HomeInfoSettingsTrait.HouseTypeMap[keyof HomeInfoSettingsTrait.HouseTypeMap];
  setHouseType(value: HomeInfoSettingsTrait.HouseTypeMap[keyof HomeInfoSettingsTrait.HouseTypeMap]): void;

  getUserSpecifiedNumThermostats(): HomeInfoSettingsTrait.NumThermostatsMap[keyof HomeInfoSettingsTrait.NumThermostatsMap];
  setUserSpecifiedNumThermostats(value: HomeInfoSettingsTrait.NumThermostatsMap[keyof HomeInfoSettingsTrait.NumThermostatsMap]): void;

  getRenovationDate(): HomeInfoSettingsTrait.RenovationDateMap[keyof HomeInfoSettingsTrait.RenovationDateMap];
  setRenovationDate(value: HomeInfoSettingsTrait.RenovationDateMap[keyof HomeInfoSettingsTrait.RenovationDateMap]): void;

  getStructureArea(): number;
  setStructureArea(value: number): void;

  getMeasurementScale(): HomeInfoSettingsTrait.MeasurementScaleMap[keyof HomeInfoSettingsTrait.MeasurementScaleMap];
  setMeasurementScale(value: HomeInfoSettingsTrait.MeasurementScaleMap[keyof HomeInfoSettingsTrait.MeasurementScaleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HomeInfoSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: HomeInfoSettingsTrait): HomeInfoSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HomeInfoSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HomeInfoSettingsTrait;
  static deserializeBinaryFromReader(message: HomeInfoSettingsTrait, reader: jspb.BinaryReader): HomeInfoSettingsTrait;
}

export namespace HomeInfoSettingsTrait {
  export type AsObject = {
    houseType: HomeInfoSettingsTrait.HouseTypeMap[keyof HomeInfoSettingsTrait.HouseTypeMap],
    userSpecifiedNumThermostats: HomeInfoSettingsTrait.NumThermostatsMap[keyof HomeInfoSettingsTrait.NumThermostatsMap],
    renovationDate: HomeInfoSettingsTrait.RenovationDateMap[keyof HomeInfoSettingsTrait.RenovationDateMap],
    structureArea: number,
    measurementScale: HomeInfoSettingsTrait.MeasurementScaleMap[keyof HomeInfoSettingsTrait.MeasurementScaleMap],
  }

  export interface HouseTypeMap {
    HOUSE_TYPE_UNSPECIFIED: 0;
    HOUSE_TYPE_SINGLE_FAMILY: 1;
    HOUSE_TYPE_MULTI_FAMILY: 2;
    HOUSE_TYPE_CONDO: 3;
    HOUSE_TYPE_BUSINESS: 4;
  }

  export const HouseType: HouseTypeMap;

  export interface MeasurementScaleMap {
    MEASUREMENT_SCALE_UNSPECIFIED: 0;
    MEASUREMENT_SCALE_METRIC: 1;
    MEASUREMENT_SCALE_IMPERIAL: 2;
  }

  export const MeasurementScale: MeasurementScaleMap;

  export interface NumThermostatsMap {
    NUM_THERMOSTATS_UNSPECIFIED: 0;
    NUM_THERMOSTATS_ONE: 1;
    NUM_THERMOSTATS_TWO: 2;
    NUM_THERMOSTATS_THREE: 3;
    NUM_THERMOSTATS_FOUR: 4;
    NUM_THERMOSTATS_FIVE_PLUS: 5;
  }

  export const NumThermostats: NumThermostatsMap;

  export interface RenovationDateMap {
    RENOVATION_DATE_UNSPECIFIED: 0;
    RENOVATION_DATE_DONT_KNOW: 1;
    RENOVATION_DATE_PRE_1940: 2;
    RENOVATION_DATE_1940: 3;
    RENOVATION_DATE_1950: 4;
    RENOVATION_DATE_1960: 5;
    RENOVATION_DATE_1970: 6;
    RENOVATION_DATE_1980: 7;
    RENOVATION_DATE_1990: 8;
    RENOVATION_DATE_2000: 9;
    RENOVATION_DATE_2010: 10;
  }

  export const RenovationDate: RenovationDateMap;
}

export class StructureLocationTrait extends jspb.Message {
  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  getAddressLines(): string;
  setAddressLines(value: string): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCity(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasState(): boolean;
  clearState(): void;
  getState(): google_protobuf_wrappers_pb.StringValue | undefined;
  setState(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGeoCoordinate(): boolean;
  clearGeoCoordinate(): void;
  getGeoCoordinate(): StructureLocationTrait.GeoCoordinate | undefined;
  setGeoCoordinate(value?: StructureLocationTrait.GeoCoordinate): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureLocationTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureLocationTrait): StructureLocationTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureLocationTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureLocationTrait;
  static deserializeBinaryFromReader(message: StructureLocationTrait, reader: jspb.BinaryReader): StructureLocationTrait;
}

export namespace StructureLocationTrait {
  export type AsObject = {
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressLines: string,
    city?: google_protobuf_wrappers_pb.StringValue.AsObject,
    state?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoCoordinate?: StructureLocationTrait.GeoCoordinate.AsObject,
  }

  export class GeoCoordinate extends jspb.Message {
    getLatitude(): number;
    setLatitude(value: number): void;

    getLongitude(): number;
    setLongitude(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoCoordinate.AsObject;
    static toObject(includeInstance: boolean, msg: GeoCoordinate): GeoCoordinate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoCoordinate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoCoordinate;
    static deserializeBinaryFromReader(message: GeoCoordinate, reader: jspb.BinaryReader): GeoCoordinate;
  }

  export namespace GeoCoordinate {
    export type AsObject = {
      latitude: number,
      longitude: number,
    }
  }
}

export class StructureInfoTrait extends jspb.Message {
  getStructureId(): string;
  setStructureId(value: string): void;

  getMaxNestGuardCount(): number;
  setMaxNestGuardCount(value: number): void;

  getMaxNestSensorCount(): number;
  setMaxNestSensorCount(value: number): void;

  getMaxNestConnectCount(): number;
  setMaxNestConnectCount(value: number): void;

  getPrimaryFabricId(): number;
  setPrimaryFabricId(value: number): void;

  hasPairerId(): boolean;
  clearPairerId(): void;
  getPairerId(): weave_common_pb.ResourceId | undefined;
  setPairerId(value?: weave_common_pb.ResourceId): void;

  getMaxNestLockCount(): number;
  setMaxNestLockCount(value: number): void;

  getMaxNestMoonstoneCount(): number;
  setMaxNestMoonstoneCount(value: number): void;

  getMaxNestProtectCount(): number;
  setMaxNestProtectCount(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasHgId(): boolean;
  clearHgId(): void;
  getHgId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHgId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMaxResourceCountsMap(): jspb.Map<string, number>;
  clearMaxResourceCountsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureInfoTrait.AsObject;
  static toObject(includeInstance: boolean, msg: StructureInfoTrait): StructureInfoTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureInfoTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureInfoTrait;
  static deserializeBinaryFromReader(message: StructureInfoTrait, reader: jspb.BinaryReader): StructureInfoTrait;
}

export namespace StructureInfoTrait {
  export type AsObject = {
    structureId: string,
    maxNestGuardCount: number,
    maxNestSensorCount: number,
    maxNestConnectCount: number,
    primaryFabricId: number,
    pairerId?: weave_common_pb.ResourceId.AsObject,
    maxNestLockCount: number,
    maxNestMoonstoneCount: number,
    maxNestProtectCount: number,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    hgId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    maxResourceCountsMap: Array<[string, number]>,
  }
}

