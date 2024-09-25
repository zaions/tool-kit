import { FormFieldsEnum } from "@enums/formFieldsEnum";
import {
  BuildingTypeEnum,
  CleanlinessEnum,
  GenderEnum,
  GuestsEnum,
  PetsEnum,
  PlacePreferenceEnum,
  SmokeEnum,
} from "src/roommate/enums";
import { IMinMax } from "../general";

export interface IRoomPreference {
  [FormFieldsEnum.whereWantToLive]?: string;
  [FormFieldsEnum.moveInDate]?: string | number;
  [FormFieldsEnum.budget]?: IMinMax;
  [FormFieldsEnum.placePreference]?: PlacePreferenceEnum;
  [FormFieldsEnum.buildingType]?: BuildingTypeEnum;
}

export interface IRoommatePreference {
  [FormFieldsEnum.gender]?: GenderEnum;
  [FormFieldsEnum.age]?: IMinMax;
  [FormFieldsEnum.smoke]?: SmokeEnum;
  [FormFieldsEnum.pets]?: PetsEnum;
  [FormFieldsEnum.guests]?: GuestsEnum;
  [FormFieldsEnum.cleanliness]?: CleanlinessEnum;
  [FormFieldsEnum.other]?: string;
}
