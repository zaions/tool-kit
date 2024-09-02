import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { TransferMethodEnum } from "@enums/generic";
import { PermissionEnum } from "@enums/rolePermissionsEnum";
import { InAppNotificationSendToEnum } from "src/play-and-win/enums";
import { IUser } from "../user";


export interface IPlayerIdFormData {
    [FormFieldsEnum.playerId]: string;
}

export interface ILoginFormData {
    [FormFieldsEnum.email]: string;
    [FormFieldsEnum.phoneNumber]?: string;
    [FormFieldsEnum.password]: string;
}

export interface IRegisterFormData {
    [FormFieldsEnum.email]: string;
    [FormFieldsEnum.phoneNumber]: string;
    [FormFieldsEnum.name]: string;
    [FormFieldsEnum.password]: string;
    [FormFieldsEnum.withdrawOptions]: string[];
    [FormFieldsEnum.cnic]?: string;
    [FormFieldsEnum.city]?: string;
    [FormFieldsEnum.country]?: string;
    [FormFieldsEnum.address]?: string;
    [FormFieldsEnum.referredBy]?: string;
    [FormFieldsEnum.role]?: string;
}

// Game Forms Data
export interface IGameFormData {
    [FormFieldsEnum.title]: string;
    [FormFieldsEnum.description]: string;
    [FormFieldsEnum.maxPlayersAllowed]: number;
    [FormFieldsEnum.feePerPlayer]: number;
    [FormFieldsEnum.serviceCharges]: number; // for engager fee we will define that based on engager level or subscription
    [FormFieldsEnum.image]: string;
    [FormFieldsEnum.minPlayersToStartGame]: number;
}

// Game Room Forms Data
export interface IGameRoomFormData {
    [FormFieldsEnum.title]: string;
    [FormFieldsEnum.description]: string;
    [FormFieldsEnum.gameId]: string;
    [FormFieldsEnum.isPrivate]: number;
}

// Top ups Data
export interface ITopupRequestFormData {
    [FormFieldsEnum.amount]: number;
    [FormFieldsEnum.agentRemarks]: string;
    [FormFieldsEnum.transferMethod]: TransferMethodEnum;
    [FormFieldsEnum.receptScreenshot]: string;
}

export interface IWithdrawRequestFormData {
    [FormFieldsEnum.amount]: number;
    [FormFieldsEnum.agentRemarks]: string;
    [FormFieldsEnum.transferMethod]: TransferMethodEnum;
    [FormFieldsEnum.receptScreenshot]: string;
}

export interface ITransferCoinsRequestFormData {
    [FormFieldsEnum.amount]: number;
    [FormFieldsEnum.otherPlayerPhoneNumber]?: string; // we only need this from frontend when creating a transfer coins request to find the otherPlayer, this will not get stored in DB.
    [FormFieldsEnum.userRemarks]?: string;
}

export interface IInAppNotificationFormData {
    [FormFieldsEnum.title]: string;
    [FormFieldsEnum.description]: string;
    [FormFieldsEnum.icon]?: string;
    [FormFieldsEnum.image]?: string;
    [FormFieldsEnum.sendAt]?: string;
    [FormFieldsEnum.sendTo]: InAppNotificationSendToEnum;
    [FormFieldsEnum.specificUsersPhoneNumbers]?: string[]; // send array of users phone numbers
    [FormFieldsEnum.saveAsDraft]?: boolean;
}

export interface IUpdateUserFormData extends Partial<IUser> { }

// Game Forms Data
export interface IAppUserRoleFormData {
    [FormFieldsEnum.title]: string;
    [FormFieldsEnum.description]: string;
    [FormFieldsEnum.roleIdentifier]: string;
    [FormFieldsEnum.isDefault]: boolean;
    [FormFieldsEnum.permissions]: PermissionEnum[];
}
