import {
  BooleanEnum,
  QueryKeyTypeEnum,
  RequestStatusEnum,
  TransferMethodEnum,
} from "@enums/generic";
import { _UserRoleEnum } from "@enums/rolePermissionsEnum";
import { InAppNotificationSendToEnum } from "src/play-and-win";

export const requestStatusVal = [
  RequestStatusEnum.approved,
  RequestStatusEnum.rejected,
] as const;

export const transferMethodVal = [
  TransferMethodEnum.easypaisa,
  TransferMethodEnum.jazzcash,
] as const;

export const selectorEnumVal = [
  QueryKeyTypeEnum.id,
  QueryKeyTypeEnum.roomCode,
] as const;

export const inAppNotificationsSendToEnumVal = [
  InAppNotificationSendToEnum.allUsers,
  InAppNotificationSendToEnum.allAdmins,
  InAppNotificationSendToEnum.allEngagers,
  InAppNotificationSendToEnum.allPlayers,
  InAppNotificationSendToEnum.allEngagersAndPlayers,
  InAppNotificationSendToEnum.specificUsers,
] as const;

export const userRoleEnumVal = [
  _UserRoleEnum.superAdmin,
  _UserRoleEnum.admin,
  _UserRoleEnum.manager,
  _UserRoleEnum.editor,
  _UserRoleEnum.creator,
  _UserRoleEnum.reviewer,
  _UserRoleEnum.player,
  _UserRoleEnum.engager,
] as const;

export const booleanEnumVal = [BooleanEnum.false, BooleanEnum.true];
