import {
  BuildingTypeEnum,
  CleanlinessEnum,
  ConstellationsEnum,
  FoodPreferenceEnum,
  GenderEnum,
  GuestsEnum,
  OccupationEnum,
  PetsEnum,
  PlacePreferenceEnum,
  SmokeEnum,
  WorkScheduleEnum,
} from "../enums";

export const cleanlinessVal = [
  CleanlinessEnum.clean,
  CleanlinessEnum.lessClean,
  CleanlinessEnum.normalClean,
  CleanlinessEnum.superClean,
] as const;

export const smokeVal = [SmokeEnum.no, SmokeEnum.yes, SmokeEnum.other] as const;

export const petsVal = [
  PetsEnum.no,
  PetsEnum.yes,
  PetsEnum.dependsOnThePet,
] as const;

export const guestsVal = [
  GuestsEnum.no,
  GuestsEnum.yes,
  GuestsEnum.occasionally,
] as const;

export const occupationVal = [
  OccupationEnum.student,
  OccupationEnum.haveWork,
  OccupationEnum.other,
] as const;

export const foodPreferenceVal = [
  FoodPreferenceEnum.vegan,
  FoodPreferenceEnum.vegetarian,
  FoodPreferenceEnum.other,
] as const;

export const workScheduleVal = [
  WorkScheduleEnum.dayTime,
  WorkScheduleEnum.nightTime,
  WorkScheduleEnum.other,
] as const;

export const genderVal = [
  GenderEnum.male,
  GenderEnum.female,
  GenderEnum.nonBinary,
  GenderEnum.all,
] as const;

export const constellationsVal = [
  ConstellationsEnum.aquarius,
  ConstellationsEnum.aries,
  ConstellationsEnum.capricorn,
  ConstellationsEnum.crabCancer,
  ConstellationsEnum.gemini,
  ConstellationsEnum.leo,
  ConstellationsEnum.libra,
  ConstellationsEnum.pisces,
  ConstellationsEnum.saggitarius,
  ConstellationsEnum.scorpion,
  ConstellationsEnum.taurus,
  ConstellationsEnum.virgo,
] as const;

export const placePreferenceVal = [
  PlacePreferenceEnum.entirePlace,
  PlacePreferenceEnum.sharedPlace,
] as const;

export const buildingTypeEnumVal = [
  BuildingTypeEnum.apartment,
  BuildingTypeEnum.basement,
  BuildingTypeEnum.condo,
  BuildingTypeEnum.house,
  BuildingTypeEnum.noPreference,
  BuildingTypeEnum.twonHouse,
] as const;
