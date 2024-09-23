// import { app as microsoftTeamsAppInstance } from '@microsoft/teams-js'
import { USER_TYPE } from 'src/perkforce/enums'

// Interfaces
export interface IMsTeamsApp {
  processed?: boolean
  inMicrosoftTeams?: boolean
  errorOccurred?: boolean
  errorMessage?: string
  // microsoftTeamsContext?: microsoftTeamsAppInstance.Context
  microsoftTeamsContext?: any
}

export interface IMSTeamsData {
  expiresOn?: Date
  msTeamAppLog?: string
  accessToken?: string
  refreshToken?: string
  refreshTokenAt?: Date
  isConnected?: boolean
}

export interface IMSTeamsTeam {
  id?: string
  displayName?: string
  internalId?: string
  webUrl?: string
  isArchived?: boolean
  visibility?: string
}

export interface IMSTeamsChannel {
  id?: string
  displayName?: string
  webUrl?: string
  membershipType?: string
}

export interface IMSTeamsNotificationsHistory {
  _id?: string
  userId?: string
  userName?: string
  userType?: USER_TYPE
  perkId?: string
  perkTitle?: string
  organizationOwnerId?: string
  userIsTheOrganizationOwner?: boolean
  categoryName?: string
  categoryLink?: string
  msChannel?: IMSTeamsChannel
  msTeam?: IMSTeamsTeam
  createdAt?: string
}

export interface ILastMSTeamsNotificationInfoResult {
  msTeamsTeam?: IMSTeamsTeam
  msTeamsChannel?: IMSTeamsChannel
}

export interface IMSTeamsNotificationsHistoryResult {
  msTeamsNotificationsHistory?: Array<IMSTeamsNotificationsHistory>
  lastMSTeamsNotificationInfo?: ILastMSTeamsNotificationInfoResult
}

export interface IMSTeamsGetJoinedTeams {
  message?: string
  success?: boolean
  joinedTeams?: Array<IMSTeamsTeam>
}

export interface MSTeamsSelectedTeamChannelsResult {
  message?: string
  success?: boolean
  channels?: Array<IMSTeamsChannel>
}

export interface IMicrosoftTeamsNotificationSend {
  message?: string
  success?: boolean
  notificationRecord?: IMSTeamsNotificationsHistory
}

export interface IGetMSTeamsNotificationsHistoryResponse {
  getMSTeamsNotificationsHistory?: IMSTeamsNotificationsHistoryResult
}

export interface IGetMSTeamsUserJoinedTeamsResponse {
  getMSTeamsUserJoinedTeams: {
    message?: string
    success?: boolean
    joinedTeams: Array<IMSTeamsTeam>
  }
}

export interface IGetMSTeamsSelectedTeamChannelsResponse {
  getMSTeamsSelectedTeamChannels: {
    message?: string
    success?: boolean
    channels?: Array<IMSTeamsChannel>
  }
}
