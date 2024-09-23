import { IPerk } from '../perk'
import { IUser } from '../user'

export interface ICartItem {
  perk: IPerk
  quantity: number
  price: number
  usedByCurrentUser: number
  usedEveryDaysByCurrentUser: number
  perkCopy: IPerk
  is_deleted: boolean
}

export interface ICart {
  _id?: string
  user?: IUser
  business?: IUser
  items?: Array<ICartItem>
  total?: number
}

export interface IUnavailableItem {
  perk: IPerk
  perkCopy: IPerk
  type: string
  remaining: number
}

export interface ICheckoutResult {
  url?: string
  success?: boolean
  message?: string
  unavailableItems?: Array<IUnavailableItem>
}

export interface IAddCartItemResult {
  success?: boolean
  message?: string
  showHomeButton?: boolean
}

export interface ICartItemLimitReached {
  success?: boolean
  message?: string
  limitReached?: boolean
}

export interface ICartItemLimitReachedResponse {
  cartItemLimitReached?: ICartItemLimitReached
}

export interface IGetCartResponse {
  getCart?: ICart
}

export interface IGetCheckoutSessionResponse {
  getCheckoutSession?: any
}
