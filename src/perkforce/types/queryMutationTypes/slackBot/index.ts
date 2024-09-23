// Enums

import { IPerk } from '../perk'
import { IUser } from '../user'

// Interface
export interface ISlackAuthedUser {
  id: string
}

export interface ISlackTeam {
  id: string
  name: string
}

export interface ISlackIncomingWebhook {
  channel: string
  channel_id: string
  configuration_url: string
  url: string
}

export interface ISlackResponseMetadata {
  scopes: Array<string>
}

export interface IUserSlackData {
  ok: boolean
  app_id: string
  // authed_user: SlackAuthedUser
  // scope: string
  // token_type: string
  // access_token: string
  // bot_user_id: string
  // team: SlackTeam
  // enterprise: string
  // is_enterprise_install: boolean
  response_metadata: ISlackResponseMetadata
}

export interface ISlackWorkspaceChannel {
  id: string
  name: string
  is_channel: boolean
  is_group: boolean
  is_private: boolean
}

export interface ISlackWorkspaceTeam {
  id?: string
  name?: string
}

export interface ILastSlackNotificationInfo {
  slackTeam?: ISlackWorkspaceTeam
  slackChannel?: ISlackWorkspaceChannel
}

export interface ISlackNotificationsHistory {
  _id?: string
  userId?: string
  userName?: string
  perkId?: IPerk
  organizationOwnerId?: IUser
  slackChannel?: ISlackWorkspaceChannel
  slackChannelName?: string // this is a dynamic key which we will populate on run-time (mean not available in DB).
  slackTeam?: ISlackWorkspaceTeam
  createdAt?: string
}

export interface ISlackNotificationsHistoryResult {
  slackNotificationsHistory?: Array<ISlackNotificationsHistory>
  lastSlackNotificationInfo?: ILastSlackNotificationInfo
}

export interface ISlackWorkspaceChannels {
  channels?: Array<ISlackWorkspaceChannel>
  team?: ISlackWorkspaceTeam
  success?: boolean
  message?: string
}

export interface ISendSlackNotification {
  success?: boolean
  message?: string
  notificationRecord?: ISlackNotificationsHistory
}
export interface IGetSlackNotificationsResponse {
  getSlackNotifications?: ISlackNotificationsHistoryResult
}

export interface IGetSlackWorkspaceChannelsResponse {
  getSlackWorkspaceChannels?: ISlackWorkspaceChannels
}

export interface IGetLastUsedSlackInfoResponse {
  getSlackWorkspaceChannels?: ILastSlackNotificationInfo
}
