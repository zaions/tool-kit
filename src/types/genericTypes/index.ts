import { FormFieldsEnum } from '@app-enums/formFieldsEnum';

/**
 * Type representing a generic object.
 */
export interface IGenericObject extends Record<string, any> {}

/**
 * Type representing the default database columns.
 */
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

/**
 * Type representing the pagination options.
 */
export interface IPaginationOptions {
  offset?: number;
  limit?: number;
}
