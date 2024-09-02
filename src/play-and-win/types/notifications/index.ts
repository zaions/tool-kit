import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { IDefaultDBColumns } from "src/types/genericTypes";
import { IInAppNotificationFormData } from "../formInputDataTypes";

// Interfaces
// IInAppNotification
export interface INotifications extends IInAppNotificationFormData,
    IDefaultDBColumns {
    // For Frontend
    searchText?: string
    imageFile?: File | null
    iconFile?: File | null
    [FormFieldsEnum.phoneNumber]?: string;
}
