import { FormFieldsEnum } from "@enums/formFieldsEnum";

export interface IMinMax {
  [FormFieldsEnum.min]?: number;
  [FormFieldsEnum.max]?: number;
}
