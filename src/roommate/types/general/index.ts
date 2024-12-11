import { FormFieldsEnum } from '@app-enums/formFieldsEnum';

export interface IMinMax {
  [FormFieldsEnum.min]?: number;
  [FormFieldsEnum.max]?: number;
}

export interface ILocation {
  [FormFieldsEnum.latitude]?: number;
  [FormFieldsEnum.longitude]?: number;
  [FormFieldsEnum.placeId]?: string | number;
  [FormFieldsEnum.country]?: string;
  [FormFieldsEnum.city]?: string;
  [FormFieldsEnum.streetAddress]?: string;
  [FormFieldsEnum.apartmentSuit]?: string;
  [FormFieldsEnum.province]?: string;
  [FormFieldsEnum.postCode]?: string;
}
