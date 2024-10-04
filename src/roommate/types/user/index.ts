import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { BooleanEnum } from "@enums/generic";
import { PermissionEnum, RoleEnum } from "@enums/rolePermissionsEnum";
import { ConstellationsEnum, GenderEnum } from "src/roommate/enums";
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

export interface IUser extends Omit<IDefaultDBColumns, FormFieldsEnum.userId> {
  [FormFieldsEnum.email]?: string;
  [FormFieldsEnum.phoneNumber]?: string;
  [FormFieldsEnum.firstName]?: string;
  [FormFieldsEnum.lastName]?: string;
  [FormFieldsEnum.birthdayDate]?: string;
  [FormFieldsEnum.photoURL]?: string;
  [FormFieldsEnum.age]?: string;
  [FormFieldsEnum.disabled]?: boolean;
  [FormFieldsEnum.gender]?: GenderEnum | null;
  [FormFieldsEnum.constellation]?: ConstellationsEnum | null;
  [FormFieldsEnum.hometown]?: string;
  [FormFieldsEnum.emailVerified]?: BooleanEnum;
  [FormFieldsEnum.language]?: string;
  [FormFieldsEnum.permissions]?: Array<PermissionEnum>;
  [FormFieldsEnum.role]?: RoleEnum;
  [FormFieldsEnum.emailVerifiedAt]?: string | number;

  [FormFieldsEnum.profileCompletePercentageNumber]?: string;

  // For frontend
  [FormFieldsEnum.actions]?: string;
}
