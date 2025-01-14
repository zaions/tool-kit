import { FormFieldsEnum } from '@app-enums/formFieldsEnum';

export interface IGenericObject extends Record<string, any> {}

export interface IDefaultDBColumns {
  [FormFieldsEnum.id]: string;
  [FormFieldsEnum.uniqueId]?: string;
  [FormFieldsEnum.userUniqueId]?: string;
  [FormFieldsEnum.userId]?: string;

  [FormFieldsEnum.sortOrderNo]?: number;

  [FormFieldsEnum.createdAt]?: string | number;
  [FormFieldsEnum.updatedAt]?: string | number;
  [FormFieldsEnum.deletedAt]?: string | number;
  [FormFieldsEnum.blockedAt]?: string | number;

  [FormFieldsEnum.extraData]?: unknown;
}

export interface IPaginationOptions {
  offset?: number;
  limit?: number;
}
