import {
  AgreementStatusEnum,
  BuildingTypeEnum,
  CleanlinessEnum,
  ConstellationsEnum,
  FoodPreferenceEnum,
  GenderEnum,
  GuestsEnum,
  OccupationEnum,
  PetsEnum,
  PlaceAvailabilityTermEnum,
  PlacePreferenceEnum,
  PlaceStatusEnum,
  RentInclusionsEnum,
  SmokeEnum,
  TimeUnitEnum,
  WorkScheduleEnum,
} from "../enums";
import { PrivateShareEnum } from "./../enums/index";

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

export const buildingTypeVal = [
  BuildingTypeEnum.apartment,
  BuildingTypeEnum.basement,
  BuildingTypeEnum.condo,
  BuildingTypeEnum.house,
  BuildingTypeEnum.noPreference,
  BuildingTypeEnum.twonHouse,
] as const;

export const placeAvailabilityTermVal = [
  PlaceAvailabilityTermEnum.shortTerm,
  PlaceAvailabilityTermEnum.longTerm,
] as const;

export const timeUnitVal = [TimeUnitEnum.month, TimeUnitEnum.year] as const;

export const privateShareVal = [
  PrivateShareEnum.private,
  PrivateShareEnum.share,
] as const;

export const agreementStatusVal = [
  AgreementStatusEnum.yes,
  AgreementStatusEnum.no,
  AgreementStatusEnum.negotiated,
] as const;

export const rentInclusionsVal = [
  RentInclusionsEnum.wifi,
  RentInclusionsEnum.dishWash,
  RentInclusionsEnum.tv,
  RentInclusionsEnum.heater,
  RentInclusionsEnum.closet,
  RentInclusionsEnum.water,
  RentInclusionsEnum.balcony,
  RentInclusionsEnum.personalEnter,
  RentInclusionsEnum.electric,
  RentInclusionsEnum.laundry,
  RentInclusionsEnum.security,
  RentInclusionsEnum.parking,
] as const;

export const placeStatusVal = [
  PlaceStatusEnum.completed,
  PlaceStatusEnum.inProgress,
] as const;
