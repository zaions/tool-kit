import { checkForDuplicateEnumValues } from '@app-utils/index';

export enum CleanlinessEnum {
  superClean = 1,
  clean = 2,
  lessClean = 3,
  normalClean = 4,
}
export enum SmokeEnum {
  no = 1,
  yes = 2,
  other = 3,
}
export enum PetsEnum {
  no = 1,
  yes = 2,
  dependsOnThePet = 3,
}
export enum GuestsEnum {
  no = 1,
  yes = 2,
  occasionally = 3,
}
export enum OccupationEnum {
  student = 1,
  haveWork = 2,
  other = 3,
}
export enum FoodPreferenceEnum {
  vegan = 1,
  vegetarian = 2,
  other = 3,
}
export enum WorkScheduleEnum {
  dayTime = 1,
  nightTime = 2,
  other = 3,
}
export enum GenderEnum {
  male = 1,
  female = 2,
  nonBinary = 3,
  all = 4,
}
export enum ConstellationsEnum {
  aries = 1, // Mesha
  taurus = 2, // Vrushabha
  gemini = 3, // Mithuna
  crabCancer = 4, // Karka
  leo = 5, // Simha
  virgo = 6, // Kanya
  libra = 7, // Tula
  scorpion = 8, // Vruschika
  saggitarius = 9, // Dhanusha
  capricorn = 10, // Makara
  aquarius = 11, // Kumbha
  pisces = 12, // Meena
}
export enum PlacePreferenceEnum {
  entirePlace = 1,
  sharedPlace = 2,
}
export enum BuildingTypeEnum {
  noPreference = 1,
  condo = 2,
  apartment = 3,
  twonHouse = 4,
  house = 5,
  basement = 6,
}
export enum PlaceAvailabilityTermEnum {
  shortTerm = 1,
  longTerm = 2,
}
export enum TimeUnitEnum {
  month = 1,
  year = 2,
}
export enum PrivateShareEnum {
  private = 1,
  share = 2,
}
export enum AgreementStatusEnum {
  yes = 1,
  no = 2,
  negotiated = 3,
}
export enum RentInclusionsEnum {
  wifi = 1,
  dishWash = 2,
  tv = 3,
  heater = 4,
  closet = 5,
  water = 6,
  balcony = 7,
  personalEnter = 8,
  electric = 9,
  laundry = 10,
  security = 11,
  parking = 12,
}
export enum PlaceStatusEnum {
  inProgress = 1,
  completed = 2,
}
checkForDuplicateEnumValues(
  CleanlinessEnum,
  'duplicate values in CleanlinessEnum'
);
checkForDuplicateEnumValues(SmokeEnum, 'duplicate values in SmokeEnum');
checkForDuplicateEnumValues(PetsEnum, 'duplicate values in PetsEnum');
checkForDuplicateEnumValues(GuestsEnum, 'duplicate values in GuestsEnum');
checkForDuplicateEnumValues(
  OccupationEnum,
  'duplicate values in OccupationEnum'
);
checkForDuplicateEnumValues(
  FoodPreferenceEnum,
  'duplicate values in FoodPreferenceEnum'
);
checkForDuplicateEnumValues(
  WorkScheduleEnum,
  'duplicate values in WorkScheduleEnum'
);
checkForDuplicateEnumValues(GenderEnum, 'duplicate values in GenderEnum');
checkForDuplicateEnumValues(
  ConstellationsEnum,
  'duplicate values in ConstellationsEnum'
);
checkForDuplicateEnumValues(
  PlacePreferenceEnum,
  'duplicate values in PlacePreferenceEnum'
);
checkForDuplicateEnumValues(
  BuildingTypeEnum,
  'duplicate values in BuildingTypeEnum'
);
checkForDuplicateEnumValues(
  PlaceAvailabilityTermEnum,
  'duplicate values in PlaceAvailabilityTermEnum'
);
checkForDuplicateEnumValues(TimeUnitEnum, 'duplicate values in TimeUnitEnum');
checkForDuplicateEnumValues(
  PrivateShareEnum,
  'duplicate values in PrivateShareEnum'
);
checkForDuplicateEnumValues(
  AgreementStatusEnum,
  'duplicate values in AgreementStatusEnum'
);
checkForDuplicateEnumValues(
  RentInclusionsEnum,
  'duplicate values in RentInclusionsEnum'
);
checkForDuplicateEnumValues(
  PlaceStatusEnum,
  'duplicate values in PlaceStatusEnum'
);
