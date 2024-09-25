import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { CleanlinessEnum, FoodPreferenceEnum, GenderEnum, GuestsEnum, OccupationEnum, PetsEnum, SmokeEnum, WorkScheduleEnum } from "src/roommate/enums";

export interface ILifeStyle {
    [FormFieldsEnum.cleanliness]?: CleanlinessEnum,
    [FormFieldsEnum.smoke]?: SmokeEnum,
    [FormFieldsEnum.pets]?: PetsEnum,
    [FormFieldsEnum.guests]?: GuestsEnum,
    [FormFieldsEnum.occupation]?: OccupationEnum,
    [FormFieldsEnum.foodPreference]?: FoodPreferenceEnum,
    [FormFieldsEnum.workSchedule]?: WorkScheduleEnum,
    [FormFieldsEnum.overnightGuests]?: GenderEnum,
    [FormFieldsEnum.getUpTime]?: string,
    [FormFieldsEnum.goToBedTime]?: string,
}