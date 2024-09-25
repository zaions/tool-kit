import { FormFieldsEnum } from '@enums/formFieldsEnum';
import { TransactionTypeEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';

export interface ITransaction extends IDefaultDBColumns {
	[FormFieldsEnum.adminUserId]?: string;
	[FormFieldsEnum.itemId]: string;
	[FormFieldsEnum.balanceBefore]: number;
	[FormFieldsEnum.balanceAfter]: number;
	[FormFieldsEnum.type]: TransactionTypeEnum;
}
