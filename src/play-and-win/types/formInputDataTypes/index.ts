import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { BooleanEnum, TransferMethodEnum } from '@app-enums/generic';
import { PermissionEnum } from '@app-enums/rolePermissionsEnum';
import {
  GameTypeEnum,
  InAppNotificationSendToEnum,
} from 'src/play-and-win/enums';
import { IUser } from '../user';

export interface IPlayerIdFormData {
  [FormFieldsEnum.playerId]: string;
  [FormFieldsEnum.extraData]?: unknown;
}

export interface ILoginFormData {
  [FormFieldsEnum.email]: string;
  [FormFieldsEnum.phoneNumber]?: string;
  [FormFieldsEnum.password]: string;
  [FormFieldsEnum.extraData]?: unknown;
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
  [FormFieldsEnum.extraData]?: unknown;
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
  [FormFieldsEnum.extraData]?: unknown;
  [FormFieldsEnum.gameType]?: GameTypeEnum;
}

// Game Room Forms Data
export interface IGameRoomFormData {
  [FormFieldsEnum.title]: string;
  [FormFieldsEnum.description]: string;
  [FormFieldsEnum.gameId]: string;
  [FormFieldsEnum.isPrivate]: number;
  [FormFieldsEnum.timerForEngagerToStartActualGameInMinutes]: number;
  [FormFieldsEnum.timerForPlayersToJoinActualGameInMinutes]: number;
  [FormFieldsEnum.roomCode]?: string;
  [FormFieldsEnum.extraData]?: unknown;
}

// Top ups Data
export interface ITopupRequestFormData {
  [FormFieldsEnum.amount]: number;
  [FormFieldsEnum.agentRemarks]: string;
  [FormFieldsEnum.transferMethod]: TransferMethodEnum;
  [FormFieldsEnum.receptScreenshot]: string;
  [FormFieldsEnum.extraData]?: unknown;
}

export interface IWithdrawRequestFormData {
  [FormFieldsEnum.amount]: number;
  [FormFieldsEnum.agentRemarks]: string;
  [FormFieldsEnum.transferMethod]: TransferMethodEnum;
  [FormFieldsEnum.receptScreenshot]: string;
  [FormFieldsEnum.extraData]?: unknown;
}

export interface ITransferCoinsRequestFormData {
  [FormFieldsEnum.amount]: number;
  [FormFieldsEnum.otherPlayerPhoneNumber]?: string; // we only need this from frontend when creating a transfer coins request to find the otherPlayer, this will not get stored in DB.
  [FormFieldsEnum.userRemarks]?: string;
  [FormFieldsEnum.extraData]?: unknown;
}

export interface IInAppNotificationFormData {
  [FormFieldsEnum.title]: string;
  [FormFieldsEnum.description]: string;
  [FormFieldsEnum.icon]?: string;
  [FormFieldsEnum.image]?: string;
  [FormFieldsEnum.sendAt]?: string;
  [FormFieldsEnum.sendTo]: InAppNotificationSendToEnum;
  [FormFieldsEnum.specificUsersPhoneNumbers]?: string[]; // send array of users phone numbers
  [FormFieldsEnum.saveAsDraft]?: BooleanEnum;
  [FormFieldsEnum.extraData]?: unknown;
}

export interface IUpdateUserFormData extends Partial<IUser> {
  [FormFieldsEnum.extraData]?: unknown;
}

// Game Forms Data
export interface IAppUserRoleFormData {
  [FormFieldsEnum.title]: string;
  [FormFieldsEnum.description]: string;
  [FormFieldsEnum.roleIdentifier]: string;
  [FormFieldsEnum.isDefault]: BooleanEnum;
  [FormFieldsEnum.permissions]: PermissionEnum[];
  [FormFieldsEnum.extraData]?: unknown;
}

export interface ICoinsUpdateFormData {
  [FormFieldsEnum.phoneNumber]: string;
  [FormFieldsEnum.amount]: number;
  [FormFieldsEnum.agentRemarks]?: string;
  [FormFieldsEnum.extraData]?: unknown;
}
