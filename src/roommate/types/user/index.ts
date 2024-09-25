import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { IDefaultDBColumns } from "src/types/genericTypes";
import { IHobby } from "../hobbies";
import { ILifeStyle } from "../lifeStyle";
import { IRoommatePreference, IRoomPreference } from "../preference";

export interface IUserInfo extends IDefaultDBColumns {
  [FormFieldsEnum.aboutMe]?: string;
  [FormFieldsEnum.cnic]?: string;
  [FormFieldsEnum.city]?: string;
  [FormFieldsEnum.country]?: string;
  [FormFieldsEnum.address]?: string;
  [FormFieldsEnum.hobbies]?: IHobby;
  [FormFieldsEnum.lifeStyle]?: ILifeStyle;
}

export interface IUserPreference extends IDefaultDBColumns {
  [FormFieldsEnum.roomPreference]?: IRoomPreference;
  [FormFieldsEnum.roommatePreference]?: IRoommatePreference;
}
