import { IPerk } from '../perk'
import { IPerksRedeemData } from '../redeemPerk'
import { IUser } from '../user'

// Enums
export enum ORDER_TYPE {
  PURCHASED = 'PURCHASED',
  FREE = 'FREE'
}

// Interface
export interface IOrderItem {
  name?: string
  perk?: IPerk
  total?: number
  price?: number
  quantity?: number
  codes?: Array<IPerksRedeemData>
}

export interface IOrder {
  _id?: string
  items?: Array<IOrderItem>
  type?: ORDER_TYPE
  seller?: IUser
  user?: IUser
  total?: number
  codes?: Array<IPerksRedeemData>
  createdAt?: Date
  deletedAt?: Date
}

export interface IOrdersList {
  data?: Array<IOrder>
  count?: number
}

export interface IGetOrdersResponse {
  getOrders?: IOrdersList
}
