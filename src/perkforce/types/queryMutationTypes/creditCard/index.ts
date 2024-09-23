import { IUser } from '../user'

export interface ICreditCard {
  _id?: string
  number?: string | number
  user?: IUser
}

export interface IGetCreditCardsResponse {
  getCreditCards?: any
}
