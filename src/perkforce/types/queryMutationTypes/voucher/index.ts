import { IUser } from '../user'

export interface IVoucher {
  _id?: string
  name?: string
  employeeId?: IUser
  merchantId?: IUser
  status?: string
  value?: string
  code?: string
  email?: string
  redeemedValue?: number
  partialRedeemedValues?: Array<number>
  partialAmountExceeded?: boolean
  isValid?: boolean
  isRedeemed?: boolean
  isSuccessful?: boolean
  exist?: boolean
  createdAt?: string
  deletedAt?: string
}

export interface ICreateVoucherResponse {
  createVoucher?: IVoucher
}

export interface IRedeemVoucherResponse {
  redeemVoucher?: IVoucher
}
