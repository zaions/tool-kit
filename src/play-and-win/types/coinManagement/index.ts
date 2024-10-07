import { FormFieldsEnum } from '@enums/formFieldsEnum';
import { CoinManagementActionEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';

export interface ICoinManagement extends Partial<IDefaultDBColumns> {
  [FormFieldsEnum.phoneNumber]?: string;
  [FormFieldsEnum.amount]?: number;
  [FormFieldsEnum.agentRemarks]?: string;
  [FormFieldsEnum.action]?: CoinManagementActionEnum;
}
