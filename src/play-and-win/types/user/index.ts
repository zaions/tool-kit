import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { BooleanEnum, TransferMethodEnum } from '@app-enums/generic';
import { PermissionEnum, RoleEnum } from '@app-enums/rolePermissionsEnum';
import { IDefaultDBColumns } from 'src/types/genericTypes';

export interface IThirdPartyAppsData {
  [FormFieldsEnum.thirdPartyAppsData]?: {
    [key: string]: string | number | boolean | undefined;
    [FormFieldsEnum.pubgAppId]?: string;
  };
}

export interface ICommonUserPropsAuthAndDetailsCollection {
  [FormFieldsEnum.name]?: string;
  [FormFieldsEnum.email]?: string;
  [FormFieldsEnum.country]?: string;
  [FormFieldsEnum.city]?: string;
  [FormFieldsEnum.referralCode]?: string;
  [FormFieldsEnum.withdrawOptions]?: Array<TransferMethodEnum>;
  [FormFieldsEnum.phoneNumber]?: string;
  [FormFieldsEnum.createdAt]?: string | number;
  [FormFieldsEnum.updatedAt]?: string | number;
  [FormFieldsEnum.blockedAt]?: string | number;
  [FormFieldsEnum.referredBy]?: string;
  [FormFieldsEnum.cnic]?: string;
  [FormFieldsEnum.emailVerifiedAt]?: string | number;
  [FormFieldsEnum.disabled]?: BooleanEnum;
  [FormFieldsEnum.balance]?: number;
  [FormFieldsEnum.role]?: RoleEnum;
  [FormFieldsEnum.permissions]?: Array<PermissionEnum>;
  [FormFieldsEnum.address]?: string;
  [FormFieldsEnum.photoURL]?: string;
  // For frontend
  [FormFieldsEnum.actions]?: string;
  [FormFieldsEnum.emailVerified]?: BooleanEnum;
  [FormFieldsEnum.isBlocked]?: BooleanEnum;
}
// Interfaces
export interface IUser
  extends IDefaultDBColumns,
    IThirdPartyAppsData,
    ICommonUserPropsAuthAndDetailsCollection {
  [FormFieldsEnum.password]?: string;
  [FormFieldsEnum.passwordConfirmation]?: string;
}
