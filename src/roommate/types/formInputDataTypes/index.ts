import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { ConstellationsEnum, GenderEnum } from 'src/roommate/enums';

export interface IRegisterFormData {
  [FormFieldsEnum.email]: string;
  [FormFieldsEnum.phoneNumber]: string;
  [FormFieldsEnum.password]: string;
  [FormFieldsEnum.firstName]?: string;
  [FormFieldsEnum.lastName]?: string;
  [FormFieldsEnum.age]?: string;
  [FormFieldsEnum.gender]?: GenderEnum;
  [FormFieldsEnum.constellation]?: ConstellationsEnum;
  [FormFieldsEnum.hometown]?: string;
  [FormFieldsEnum.language]?: Array<string>;
  [FormFieldsEnum.profileCompletePercentageNumber]?: number;
  [FormFieldsEnum.birthdayDate]?: string | number;
  [FormFieldsEnum.role]?: string;
}
