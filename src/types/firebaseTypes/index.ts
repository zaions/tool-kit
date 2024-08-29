import {
	DBColumnKeysShortFormEnum,
	FrbWhereConditionEnum,
} from '@enums/firebaseEnum';
import { FormFieldsEnum } from '@enums/formFieldsEnum';

export type DBItemGenericDataType = Partial<
	Record<DBColumnKeysShortFormEnum, any>
>;
export type FormItemGenericDataType = Partial<Record<FormFieldsEnum, any>>;

export interface IFrbCollectionQueryItem {
	fieldKey: DBColumnKeysShortFormEnum;
	condition: FrbWhereConditionEnum;
	value: any;
}
