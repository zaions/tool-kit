export interface ISlackTeam {
  id: string
  name: string
}

export interface ISlackChannel {
  id: string
  name: string
}

export interface ISlackNotification {
  _id: string
  userId: string
  userName: string
  slackChannel: ISlackChannel
  slackChannelName: string
  slackTeam: ISlackTeam
  createdAt: string
}

export interface ILastSlackNotificationInfo {
  slackTeam: ISlackTeam
  slackChannel: ISlackChannel
}

export interface IGetSlackNotificationsQResponse {
  getSlackNotifications: {
    slackNotificationsHistory: ISlackNotification[]
    lastSlackNotificationInfo: ILastSlackNotificationInfo
  }
}

export interface IGetSlackWorkspaceChannelsQResponse {
  getSlackWorkspaceChannels: {
    success: boolean
    message: string
    channels: ISlackChannel[]
    team: ISlackTeam
  }
}
