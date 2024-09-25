import { FormFieldsEnum } from "@enums/formFieldsEnum";

export interface IHobby {
    [FormFieldsEnum.music]?: Array<string>,
    [FormFieldsEnum.movies]?: Array<string>,
    [FormFieldsEnum.travel]?: Array<string>,
    [FormFieldsEnum.books]?: Array<string>,
    [FormFieldsEnum.gym]?: Array<string>,
    [FormFieldsEnum.food]?: Array<string>,
}