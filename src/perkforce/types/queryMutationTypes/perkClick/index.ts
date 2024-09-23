import { IPerk } from '../perk'
import { IUser } from '../user'

export interface IPerkClick {
  _id?: string
  perk?: IPerk
  user?: IUser
  createdAt?: string
  perkItem?: IPerk
}

export interface IGetPerkClicksResponse {
  getPerkClicks?: {
    perkClicks?: Array<IPerkClick>
    count?: number
  }
}

export interface IGetPerkGraphClicksResponse {
  getPerkGraphClicks?: {
    perkGraphClicks?: Array<{
      _id?: string
      perk?: IPerk
      count?: number
    }>
    count?: number
  }
}

export interface IPerkClickItem {
  _id?: string
  count?: number
  perk?: IPerk
}

export interface IPerkClickByUserItem {
  // _id: JSON
  count?: number
  perk?: IPerk
  user?: IUser
}

export interface IPerkClicksList {
  perkClicks?: Array<IPerkClickItem>
  count?: number
}

export interface IPerkClicksByUserList {
  perkClicks?: Array<IPerkClickByUserItem>
  count?: number
}

export interface IPerkGraphClicksList {
  perkGraphClicks?: Array<IPerkClickItem>
  count?: number
}
