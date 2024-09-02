import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { InAppNotificationSendToEnum } from "src/play-and-win/enums";

// Interfaces
export interface INotifications {
    [FormFieldsEnum.id]?: string;
    [FormFieldsEnum.title]?: string;
    [FormFieldsEnum.description]?: string;
    [FormFieldsEnum.icon]?: string;
    [FormFieldsEnum.image]?: string;
    [FormFieldsEnum.sendAt]?: string;
    [FormFieldsEnum.sendTo]?: InAppNotificationSendToEnum;
    [FormFieldsEnum.specificUsersPhoneNumbers]?: Array<string>;
    // [FormFieldsEnum.saveAsDraft]?: boolean;
    [FormFieldsEnum.createdAt]?: string;
    [FormFieldsEnum.updatedAt]?: string;
    [FormFieldsEnum.deletedAt]?: string;

    // For Frontend
    searchText?: string
    imageFile?: File | null
    iconFile?: File | null
    [FormFieldsEnum.phoneNumber]?: string;
}
