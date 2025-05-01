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
  RMTimeUnitEnum,
  SmokeEnum,
  WorkScheduleEnum,
} from '../enums';
import { PrivateShareEnum } from './../enums/index';

export const cleanlinessVal: readonly [
  CleanlinessEnum.clean,
  CleanlinessEnum.lessClean,
  CleanlinessEnum.normalClean,
  CleanlinessEnum.superClean
] = [
  CleanlinessEnum.clean,
  CleanlinessEnum.lessClean,
  CleanlinessEnum.normalClean,
  CleanlinessEnum.superClean,
] as const;

export const smokeVal: readonly [SmokeEnum.no, SmokeEnum.yes, SmokeEnum.other] =
  [SmokeEnum.no, SmokeEnum.yes, SmokeEnum.other] as const;

export const petsVal: readonly [
  PetsEnum.no,
  PetsEnum.yes,
  PetsEnum.dependsOnThePet
] = [PetsEnum.no, PetsEnum.yes, PetsEnum.dependsOnThePet] as const;

export const guestsVal: readonly [
  GuestsEnum.no,
  GuestsEnum.yes,
  GuestsEnum.occasionally
] = [GuestsEnum.no, GuestsEnum.yes, GuestsEnum.occasionally] as const;

export const occupationVal: readonly [
  OccupationEnum.student,
  OccupationEnum.haveWork,
  OccupationEnum.other
] = [
  OccupationEnum.student,
  OccupationEnum.haveWork,
  OccupationEnum.other,
] as const;

export const foodPreferenceVal: readonly [
  FoodPreferenceEnum.vegan,
  FoodPreferenceEnum.vegetarian,
  FoodPreferenceEnum.other
] = [
  FoodPreferenceEnum.vegan,
  FoodPreferenceEnum.vegetarian,
  FoodPreferenceEnum.other,
] as const;

export const workScheduleVal: readonly [
  WorkScheduleEnum.dayTime,
  WorkScheduleEnum.nightTime,
  WorkScheduleEnum.other
] = [
  WorkScheduleEnum.dayTime,
  WorkScheduleEnum.nightTime,
  WorkScheduleEnum.other,
] as const;

export const genderVal: readonly [
  GenderEnum.male,
  GenderEnum.female,
  GenderEnum.nonBinary,
  GenderEnum.all
] = [
  GenderEnum.male,
  GenderEnum.female,
  GenderEnum.nonBinary,
  GenderEnum.all,
] as const;

export const constellationsVal: readonly [
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
  ConstellationsEnum.virgo
] = [
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

export const placePreferenceVal: readonly [
  PlacePreferenceEnum.entirePlace,
  PlacePreferenceEnum.sharedPlace
] = [PlacePreferenceEnum.entirePlace, PlacePreferenceEnum.sharedPlace] as const;

export const buildingTypeVal: readonly [
  BuildingTypeEnum.apartment,
  BuildingTypeEnum.basement,
  BuildingTypeEnum.condo,
  BuildingTypeEnum.house,
  BuildingTypeEnum.noPreference,
  BuildingTypeEnum.twonHouse
] = [
  BuildingTypeEnum.apartment,
  BuildingTypeEnum.basement,
  BuildingTypeEnum.condo,
  BuildingTypeEnum.house,
  BuildingTypeEnum.noPreference,
  BuildingTypeEnum.twonHouse,
] as const;

export const placeAvailabilityTermVal: readonly [
  PlaceAvailabilityTermEnum.shortTerm,
  PlaceAvailabilityTermEnum.longTerm
] = [
  PlaceAvailabilityTermEnum.shortTerm,
  PlaceAvailabilityTermEnum.longTerm,
] as const;

export const timeUnitVal: readonly [RMTimeUnitEnum.month, RMTimeUnitEnum.year] =
  [RMTimeUnitEnum.month, RMTimeUnitEnum.year] as const;

export const privateShareVal: readonly [
  PrivateShareEnum.private,
  PrivateShareEnum.share
] = [PrivateShareEnum.private, PrivateShareEnum.share] as const;

export const agreementStatusVal: readonly [
  AgreementStatusEnum.yes,
  AgreementStatusEnum.no,
  AgreementStatusEnum.negotiated
] = [
  AgreementStatusEnum.yes,
  AgreementStatusEnum.no,
  AgreementStatusEnum.negotiated,
] as const;

export const rentInclusionsVal: readonly [
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
  RentInclusionsEnum.parking
] = [
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

export const placeStatusVal: readonly [
  PlaceStatusEnum.completed,
  PlaceStatusEnum.inProgress
] = [PlaceStatusEnum.completed, PlaceStatusEnum.inProgress] as const;
