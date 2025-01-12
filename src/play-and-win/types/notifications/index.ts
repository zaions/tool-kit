import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { InAppNotificationStatusEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { IInAppNotificationFormData } from '../formInputDataTypes';

export interface IInAppNotification
  extends IInAppNotificationFormData,
    IDefaultDBColumns {
  // For Frontend
  [FormFieldsEnum.searchText]?: string;
  [FormFieldsEnum.imageFile]?: File | null;
  [FormFieldsEnum.iconFile]?: File | null;
  [FormFieldsEnum.phoneNumber]?: string;
  [FormFieldsEnum.status]: InAppNotificationStatusEnum;
}
