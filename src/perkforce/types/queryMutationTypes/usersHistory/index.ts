import { IProfile } from '../profile'
import { IUser } from '../user'

export interface IUserHistory {
  _id?: string
  user?: IUser
  profile?: IProfile
  loggedInAt?: string
  type?: string
}

export interface IUserHistoryList {
  usersHistory?: Array<IUserHistory>
  count?: number
}

export interface IGetUserHistoryResponse {
  getUserHistory?: IUserHistoryList
}
