// package: nest.trait.hvac
// file: nest.hvac.proto

import * as jspb from "google-protobuf";
import * as weave_common_pb from "./weave.common_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class EcoModeStateTrait extends jspb.Message {
  getEcoMode(): EcoModeStateTrait.EcoModeMap[keyof EcoModeStateTrait.EcoModeMap];
  setEcoMode(value: EcoModeStateTrait.EcoModeMap[keyof EcoModeStateTrait.EcoModeMap]): void;

  getEcoModeChangeReason(): EcoModeStateTrait.EcoModeChangeReasonMap[keyof EcoModeStateTrait.EcoModeChangeReasonMap];
  setEcoModeChangeReason(value: EcoModeStateTrait.EcoModeChangeReasonMap[keyof EcoModeStateTrait.EcoModeChangeReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoModeStateTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EcoModeStateTrait): EcoModeStateTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EcoModeStateTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoModeStateTrait;
  static deserializeBinaryFromReader(message: EcoModeStateTrait, reader: jspb.BinaryReader): EcoModeStateTrait;
}

export namespace EcoModeStateTrait {
  export type AsObject = {
    ecoMode: EcoModeStateTrait.EcoModeMap[keyof EcoModeStateTrait.EcoModeMap],
    ecoModeChangeReason: EcoModeStateTrait.EcoModeChangeReasonMap[keyof EcoModeStateTrait.EcoModeChangeReasonMap],
  }

  export interface EcoModeMap {
    ECO_MODE_UNSPECIFIED: 0;
    ECO_MODE_INACTIVE: 1;
    ECO_MODE_MANUAL_ECO: 2;
    ECO_MODE_AUTO_ECO: 3;
  }

  export const EcoMode: EcoModeMap;

  export interface EcoModeChangeReasonMap {
    ECO_MODE_CHANGE_REASON_UNSPECIFIED: 0;
    ECO_MODE_CHANGE_REASON_MANUAL: 1;
    ECO_MODE_CHANGE_REASON_STRUCTURE_MODE: 2;
    ECO_MODE_CHANGE_REASON_OCCUPANCY: 3;
    ECO_MODE_CHANGE_REASON_TEMPERATURE: 4;
    ECO_MODE_CHANGE_REASON_FEATURE_ENABLE: 5;
  }

  export const EcoModeChangeReason: EcoModeChangeReasonMap;
}

export class AssociatedHeatlinksTrait extends jspb.Message {
  clearHeatLinksList(): void;
  getHeatLinksList(): Array<AssociatedHeatlinksTrait.AssociatedHeatlink>;
  setHeatLinksList(value: Array<AssociatedHeatlinksTrait.AssociatedHeatlink>): void;
  addHeatLinks(value?: AssociatedHeatlinksTrait.AssociatedHeatlink, index?: number): AssociatedHeatlinksTrait.AssociatedHeatlink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssociatedHeatlinksTrait.AsObject;
  static toObject(includeInstance: boolean, msg: AssociatedHeatlinksTrait): AssociatedHeatlinksTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssociatedHeatlinksTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssociatedHeatlinksTrait;
  static deserializeBinaryFromReader(message: AssociatedHeatlinksTrait, reader: jspb.BinaryReader): AssociatedHeatlinksTrait;
}

export namespace AssociatedHeatlinksTrait {
  export type AsObject = {
    heatLinksList: Array<AssociatedHeatlinksTrait.AssociatedHeatlink.AsObject>,
  }

  export class AssociatedHeatlink extends jspb.Message {
    hasDeviceId(): boolean;
    clearDeviceId(): void;
    getDeviceId(): weave_common_pb.ResourceId | undefined;
    setDeviceId(value?: weave_common_pb.ResourceId): void;

    getVendorId(): number;
    setVendorId(value: number): void;

    getProductId(): number;
    setProductId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssociatedHeatlink.AsObject;
    static toObject(includeInstance: boolean, msg: AssociatedHeatlink): AssociatedHeatlink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssociatedHeatlink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssociatedHeatlink;
    static deserializeBinaryFromReader(message: AssociatedHeatlink, reader: jspb.BinaryReader): AssociatedHeatlink;
  }

  export namespace AssociatedHeatlink {
    export type AsObject = {
      deviceId?: weave_common_pb.ResourceId.AsObject,
      vendorId: number,
      productId: number,
    }
  }
}

export class HvacControl extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HvacControl.AsObject;
  static toObject(includeInstance: boolean, msg: HvacControl): HvacControl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HvacControl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HvacControl;
  static deserializeBinaryFromReader(message: HvacControl, reader: jspb.BinaryReader): HvacControl;
}

export namespace HvacControl {
  export type AsObject = {
  }

  export class Temperature extends jspb.Message {
    getValue(): number;
    setValue(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Temperature.AsObject;
    static toObject(includeInstance: boolean, msg: Temperature): Temperature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Temperature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Temperature;
    static deserializeBinaryFromReader(message: Temperature, reader: jspb.BinaryReader): Temperature;
  }

  export namespace Temperature {
    export type AsObject = {
      value: number,
    }
  }

  export class TemperatureThreshold extends jspb.Message {
    hasValue(): boolean;
    clearValue(): void;
    getValue(): HvacControl.Temperature | undefined;
    setValue(value?: HvacControl.Temperature): void;

    getEnabled(): boolean;
    setEnabled(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemperatureThreshold.AsObject;
    static toObject(includeInstance: boolean, msg: TemperatureThreshold): TemperatureThreshold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemperatureThreshold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemperatureThreshold;
    static deserializeBinaryFromReader(message: TemperatureThreshold, reader: jspb.BinaryReader): TemperatureThreshold;
  }

  export namespace TemperatureThreshold {
    export type AsObject = {
      value?: HvacControl.Temperature.AsObject,
      enabled: boolean,
    }
  }
}

export class EcoModeTrait extends jspb.Message {
  hasCurrentEcoTemperatureHeat(): boolean;
  clearCurrentEcoTemperatureHeat(): void;
  getCurrentEcoTemperatureHeat(): HvacControl.Temperature | undefined;
  setCurrentEcoTemperatureHeat(value?: HvacControl.Temperature): void;

  hasCurrentEcoTemperatureCool(): boolean;
  clearCurrentEcoTemperatureCool(): void;
  getCurrentEcoTemperatureCool(): HvacControl.Temperature | undefined;
  setCurrentEcoTemperatureCool(value?: HvacControl.Temperature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoModeTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EcoModeTrait): EcoModeTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EcoModeTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoModeTrait;
  static deserializeBinaryFromReader(message: EcoModeTrait, reader: jspb.BinaryReader): EcoModeTrait;
}

export namespace EcoModeTrait {
  export type AsObject = {
    currentEcoTemperatureHeat?: HvacControl.Temperature.AsObject,
    currentEcoTemperatureCool?: HvacControl.Temperature.AsObject,
  }
}

export class EcoModeSettingsTrait extends jspb.Message {
  getStructureModeFollowEnabled(): boolean;
  setStructureModeFollowEnabled(value: boolean): void;

  hasEcoTemperatureHeat(): boolean;
  clearEcoTemperatureHeat(): void;
  getEcoTemperatureHeat(): HvacControl.TemperatureThreshold | undefined;
  setEcoTemperatureHeat(value?: HvacControl.TemperatureThreshold): void;

  hasEcoTemperatureCool(): boolean;
  clearEcoTemperatureCool(): void;
  getEcoTemperatureCool(): HvacControl.TemperatureThreshold | undefined;
  setEcoTemperatureCool(value?: HvacControl.TemperatureThreshold): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EcoModeSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: EcoModeSettingsTrait): EcoModeSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EcoModeSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EcoModeSettingsTrait;
  static deserializeBinaryFromReader(message: EcoModeSettingsTrait, reader: jspb.BinaryReader): EcoModeSettingsTrait;
}

export namespace EcoModeSettingsTrait {
  export type AsObject = {
    structureModeFollowEnabled: boolean,
    ecoTemperatureHeat?: HvacControl.TemperatureThreshold.AsObject,
    ecoTemperatureCool?: HvacControl.TemperatureThreshold.AsObject,
  }
}

export class DisplaySettingsTrait extends jspb.Message {
  getFarsightDisplay(): DisplaySettingsTrait.FarsightDisplayMap[keyof DisplaySettingsTrait.FarsightDisplayMap];
  setFarsightDisplay(value: DisplaySettingsTrait.FarsightDisplayMap[keyof DisplaySettingsTrait.FarsightDisplayMap]): void;

  getTemperatureScale(): DisplaySettingsTrait.TemperatureScaleMap[keyof DisplaySettingsTrait.TemperatureScaleMap];
  setTemperatureScale(value: DisplaySettingsTrait.TemperatureScaleMap[keyof DisplaySettingsTrait.TemperatureScaleMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplaySettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: DisplaySettingsTrait): DisplaySettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplaySettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplaySettingsTrait;
  static deserializeBinaryFromReader(message: DisplaySettingsTrait, reader: jspb.BinaryReader): DisplaySettingsTrait;
}

export namespace DisplaySettingsTrait {
  export type AsObject = {
    farsightDisplay: DisplaySettingsTrait.FarsightDisplayMap[keyof DisplaySettingsTrait.FarsightDisplayMap],
    temperatureScale: DisplaySettingsTrait.TemperatureScaleMap[keyof DisplaySettingsTrait.TemperatureScaleMap],
  }

  export interface FarsightDisplayMap {
    FARSIGHT_DISPLAY_UNSPECIFIED: 0;
    FARSIGHT_DISPLAY_TARGET_TEMP: 1;
    FARSIGHT_DISPLAY_CURRENT_TEMP: 2;
    FARSIGHT_DISPLAY_ANALOG_CLOCK: 3;
    FARSIGHT_DISPLAY_DIGITAL_CLOCK: 4;
    FARSIGHT_DISPLAY_WEATHER: 5;
    FARSIGHT_DISPLAY_NONE: 6;
  }

  export const FarsightDisplay: FarsightDisplayMap;

  export interface TemperatureScaleMap {
    TEMPERATURE_SCALE_UNSPECIFIED: 0;
    TEMPERATURE_SCALE_C: 1;
    TEMPERATURE_SCALE_F: 2;
  }

  export const TemperatureScale: TemperatureScaleMap;
}

export class LeafTrait extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): void;

  hasEcoThresholdHeat(): boolean;
  clearEcoThresholdHeat(): void;
  getEcoThresholdHeat(): HvacControl.Temperature | undefined;
  setEcoThresholdHeat(value?: HvacControl.Temperature): void;

  hasEcoThresholdCool(): boolean;
  clearEcoThresholdCool(): void;
  getEcoThresholdCool(): HvacControl.Temperature | undefined;
  setEcoThresholdCool(value?: HvacControl.Temperature): void;

  hasSetpointThresholdHeat(): boolean;
  clearSetpointThresholdHeat(): void;
  getSetpointThresholdHeat(): HvacControl.Temperature | undefined;
  setSetpointThresholdHeat(value?: HvacControl.Temperature): void;

  hasSetpointThresholdCool(): boolean;
  clearSetpointThresholdCool(): void;
  getSetpointThresholdCool(): HvacControl.Temperature | undefined;
  setSetpointThresholdCool(value?: HvacControl.Temperature): void;

  hasScheduleDelta(): boolean;
  clearScheduleDelta(): void;
  getScheduleDelta(): HvacControl.Temperature | undefined;
  setScheduleDelta(value?: HvacControl.Temperature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafTrait.AsObject;
  static toObject(includeInstance: boolean, msg: LeafTrait): LeafTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeafTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafTrait;
  static deserializeBinaryFromReader(message: LeafTrait, reader: jspb.BinaryReader): LeafTrait;
}

export namespace LeafTrait {
  export type AsObject = {
    active: boolean,
    ecoThresholdHeat?: HvacControl.Temperature.AsObject,
    ecoThresholdCool?: HvacControl.Temperature.AsObject,
    setpointThresholdHeat?: HvacControl.Temperature.AsObject,
    setpointThresholdCool?: HvacControl.Temperature.AsObject,
    scheduleDelta?: HvacControl.Temperature.AsObject,
  }
}

export class SetPointScheduleSettingsTrait extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap];
  setType(value: SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPointScheduleSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: SetPointScheduleSettingsTrait): SetPointScheduleSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPointScheduleSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPointScheduleSettingsTrait;
  static deserializeBinaryFromReader(message: SetPointScheduleSettingsTrait, reader: jspb.BinaryReader): SetPointScheduleSettingsTrait;
}

export namespace SetPointScheduleSettingsTrait {
  export type AsObject = {
    name: string,
    type: SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap],
  }

  export class TemperatureSetPoint extends jspb.Message {
    getSetpointType(): SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap];
    setSetpointType(value: SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap]): void;

    getDayOfWeek(): weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap];
    setDayOfWeek(value: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap]): void;

    getSecondsInDay(): number;
    setSecondsInDay(value: number): void;

    hasHeatingTarget(): boolean;
    clearHeatingTarget(): void;
    getHeatingTarget(): HvacControl.Temperature | undefined;
    setHeatingTarget(value?: HvacControl.Temperature): void;

    hasCoolingTarget(): boolean;
    clearCoolingTarget(): void;
    getCoolingTarget(): HvacControl.Temperature | undefined;
    setCoolingTarget(value?: HvacControl.Temperature): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TemperatureSetPoint.AsObject;
    static toObject(includeInstance: boolean, msg: TemperatureSetPoint): TemperatureSetPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TemperatureSetPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TemperatureSetPoint;
    static deserializeBinaryFromReader(message: TemperatureSetPoint, reader: jspb.BinaryReader): TemperatureSetPoint;
  }

  export namespace TemperatureSetPoint {
    export type AsObject = {
      setpointType: SetPointScheduleSettingsTrait.SetPointScheduleTypeMap[keyof SetPointScheduleSettingsTrait.SetPointScheduleTypeMap],
      dayOfWeek: weave_common_pb.DayOfWeekMap[keyof weave_common_pb.DayOfWeekMap],
      secondsInDay: number,
      heatingTarget?: HvacControl.Temperature.AsObject,
      coolingTarget?: HvacControl.Temperature.AsObject,
    }
  }

  export interface SetPointScheduleTypeMap {
    SET_POINT_SCHEDULE_TYPE_UNSPECIFIED: 0;
    SET_POINT_SCHEDULE_TYPE_HEAT: 1;
    SET_POINT_SCHEDULE_TYPE_COOL: 2;
    SET_POINT_SCHEDULE_TYPE_RANGE: 3;
  }

  export const SetPointScheduleType: SetPointScheduleTypeMap;
}

export class TargetTemperatureSettingsTrait extends jspb.Message {
  hasTargetTemperature(): boolean;
  clearTargetTemperature(): void;
  getTargetTemperature(): SetPointScheduleSettingsTrait.TemperatureSetPoint | undefined;
  setTargetTemperature(value?: SetPointScheduleSettingsTrait.TemperatureSetPoint): void;

  hasEnabled(): boolean;
  clearEnabled(): void;
  getEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetTemperatureSettingsTrait.AsObject;
  static toObject(includeInstance: boolean, msg: TargetTemperatureSettingsTrait): TargetTemperatureSettingsTrait.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetTemperatureSettingsTrait, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetTemperatureSettingsTrait;
  static deserializeBinaryFromReader(message: TargetTemperatureSettingsTrait, reader: jspb.BinaryReader): TargetTemperatureSettingsTrait;
}

export namespace TargetTemperatureSettingsTrait {
  export type AsObject = {
    targetTemperature?: SetPointScheduleSettingsTrait.TemperatureSetPoint.AsObject,
    enabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

