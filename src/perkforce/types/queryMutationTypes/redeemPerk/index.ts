import { IPerk } from '../perk'
import { IPerkRedeemCode } from '../perkRedeemCodes'
import { IUser } from '../user'

// Interface
export interface IUniqueDiscountCode {
  discountCode?: string
  type?: string
  message?: string
  success?: boolean
}

export interface IPerksRedeemData {
  _id?: string
  // code?: string | React.ReactNode
  code?: any
  perk?: IPerk
  user?: IUser
  message?: string
  status?: string
  verifiedAt?: Date
  perkCreatedBy?: string
  createdAt?: Date
  updatedAt?: Date
  employer?: IUser
  statusUpdatedBy?: IUser
  deletedAt?: Date
  redeemCodeDetails?: IPerkRedeemCode
}

export interface IPerksRedeemDataList {
  data?: Array<IPerksRedeemData>
  count?: number
  success?: boolean
  message?: string
}

export interface SpecificPerkRedeemData {
  data?: IPerksRedeemData
  success?: boolean
  message?: string
}

export interface IGetAllCompanies {
  value?: string
  text?: string
}

export interface IGetPerksRedeemDataResponse {
  getPerksRedeemData?: IPerksRedeemDataList
}

export interface IGetRedeemDataByCodeResponse {
  getRedeemDataByCode?: {
    data?: IPerksRedeemData
    success?: boolean
    message?: string
  }
}

export interface IGetUniqueDiscountCodeResponse {
  getUniqueDiscountCode?: {
    discountCode?: string
    type?: string
    message?: string
    success?: boolean
  }
}

export interface IVerifyPerkRedeemResponse {
  verifyPerkRedeem?: {
    success?: boolean
    message?: string
  }
}