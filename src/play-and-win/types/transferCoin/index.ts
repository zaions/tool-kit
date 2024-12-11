import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { ProcessStatusEnum } from '@app-enums/generic';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { ITransferCoinsRequestFormData } from '../formInputDataTypes';
import { IUser } from '../user/index';

// Interfaces
export interface ITransferCoin
  extends ITransferCoinsRequestFormData,
    IDefaultDBColumns {
  [FormFieldsEnum.status]?: ProcessStatusEnum;
  [FormFieldsEnum.otherPlayerId]?: string;
  [FormFieldsEnum.otherPlayerData]?: Partial<IUser>;
  [FormFieldsEnum.otherPlayerPhoneNumber]: string;
  [FormFieldsEnum.otherPlayerName]?: string;
}
