import { IUser } from '../user'

export interface IReferral {
  _id?: string
  from?: IUser
  to?: string
  detailsForRecipient?: string
  createdAt?: string
  deletedAt?: string
}

export interface IGetReferralsResponse {
  getReferrals: IReferralList
}

export interface IReferralList {
  referrals?: Array<IReferral>
  count?: number
}
