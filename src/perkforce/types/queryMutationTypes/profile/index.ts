import { IUser } from '../user'

export interface Loc {
  id?: string
  lat?: number
  lng?: number
  desc?: string
}

export interface IProfile {
  _id?: string
  userId?: IUser
  websiteUrl?: string
  perkPrefilePhone?: string
  employees?: string
  description?: string
  createdAt?: string
  locations?: Array<Loc>
  budgetApprovalEmailAddresses?: string[]
  deletedAt?: string
}

export interface IGetProfileByUserResponse {
  getProfileByUser: IProfile
}

export interface IGetBrandProfileResponse {
  getBrandProfile?: IProfile
}
export interface EditProfileResult {
  success?: boolean
  message?: string
  user?: IUser
}
