import {
  DBColumnKeysShortFormEnum,
  FrbWhereConditionEnum,
} from '@app-enums/firebaseEnum';
import { FormFieldsEnum } from '@app-enums/formFieldsEnum';

/**
 * Type representing a generic data type for a database item.
 */
export type DBItemGenericDataType = Partial<
  Record<DBColumnKeysShortFormEnum, any>
>;

/**
 * Type representing a generic data type for a form item.
 */
export type FormItemGenericDataType = Partial<Record<FormFieldsEnum, any>>;

/**
 * Type representing an item in a collection query.
 */
export interface IFrbCollectionQueryItem {
  fieldKey: DBColumnKeysShortFormEnum;
  condition: FrbWhereConditionEnum;
  value: any;
}
