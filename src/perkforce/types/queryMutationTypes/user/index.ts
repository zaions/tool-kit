import {
  ALLOWED_ACCESS_BECAUSE,
  INTEGRATION_STATE,
  USER_TYPE
} from 'src/perkforce/enums'
import { IGroup } from '../group'
import { IInvite } from '../invites'
import { IMerchant } from '../merchant'
import { IMsTeamsApp } from '../msTeams'
import { IPerk } from '../perk'
import { IProfile } from '../profile'
import { IUserSlackData } from '../slackBot'
import { IUserStripeData } from '../stripe'

// Enums

// Interface
export interface IPerkUsed {
  perk: IPerk
  used: string
}
export interface IUser {
  _id?: string
  stripeCustomerIds?: string
  firstName?: string
  lastName?: string
  type?: USER_TYPE
  email?: string
  phoneNo?: string
  code?: string
  codeGenAt?: string
  companyName?: string
  verified?: boolean
  active?: boolean
  action?: string
  stripe?: IUserStripeData
  merchant?: IMerchant
  employer?: IProfile
  profile?: IProfile
  createdAt?: string
  isLoggedIn?: boolean
  lastSignIn?: string
  restrictAccess?: boolean
  suspended?: boolean
  onboarding?: boolean
  invited?: boolean
  invitedBy?: IUser
  invite?: IInvite
  vanityUrl?: string
  skipPhoneStep?: boolean
  skipAccountTypeStep?: boolean
  phoneAttempts?: number
  lastPhoneAttempt?: string
  logo?: string
  headerLogo?: string
  brandLogo?: string
  isSuperUser?: boolean
  employeesLandingCategory?: EmployeesLandingCategory
  waitingApproval?: boolean
  employerId?: IUser
  distance?: string
  region?: boolean
  employerUserData?: IUser
  deletedAt?: string
  termsAndConditionsAccepted?: boolean
  termsAndConditionsAcceptedAt?: Array<string>
  codeRetries?: number
  stripeAppFeePercent?: number
  perksUsed?: Array<IPerkUsed>
  perksUsedEveryDays?: Array<IPerkUsed>
  allowStripeConnection?: boolean
  allowCarousel?: boolean
  perksPerBusiness?: number
  carouselItemsPerBusiness?: number
  perksPerCompany?: number
  benefitsPerCompany?: number
  slackConnectionDetails?: IUserSlackData
  isActive?: boolean
  lastActiveTime?: string
  allowSlackConnection?: boolean
  orderEmailRecipient?: boolean
  groups?: Array<IGroup>
  status?: string
  allowedAccessBecause?: ALLOWED_ACCESS_BECAUSE
  allowedAccessEmailFormat?: string
  completedByAdminAt?: string
  allowMSTeamsConnection?: boolean
  msTeamsConDetails?: IMsTeamsApp
  organization_unique_hash?: IUser
  tinyMceFolderName?: string
  microsoftTeamsIntegrationState?: INTEGRATION_STATE
  slackIntegrationState?: INTEGRATION_STATE
  stripeIntegrationState?: INTEGRATION_STATE
  lastLocationUpdatedAt?: string
}

export interface EmployeesLandingCategory {
  isDefault?: boolean
  categoryId?: string // ID mapped to string
  categorySlug?: string
}

export interface IUserWithToken {
  token?: string
  user?: IUser
  success?: boolean
  message?: string
  noEmail?: boolean
  vanityVerified?: string
  codeRetriesLimitReached?: boolean
  activationLink?: string
}

export interface IJWT {
  token?: string
  success?: boolean
  message?: string
}

export interface IImpersonateResponse {
  success?: boolean
  message?: string
  token?: string
  user?: IUser
  adminToken?: string
}

export interface IBudgetAndBalance {
  budget?: string
  balance?: string
}

export interface IUsersList {
  users?: IUser[]
  count?: number // Int mapped to number
}

export interface ICompaniesAndBusinessWithInvitesList {
  users?: IUser[]
  count?: number // Int mapped to number
}

export interface IGetUserResponse {
  getUser?: IUser
}

export interface IGetUserByIdResponse {
  getUserById?: IUser
}

export interface IGetBrandUserResponse {
  getBrandUser?: IUser
}

export interface IGetUsersResponse {
  getUsers?: IUsersList
}

export interface IRenewTokenResponse {
  renewToken: IUserWithToken
}

export interface IResendCodeResponse {
  resendCode: IUser
}

export interface IGetHeaderImageResponse {
  getHeaderImage?: string
}

export interface IGetBudgetAndBalanceResponse {
  getHeaderImage?: IBudgetAndBalance
}

export interface IGetCompaniesAndBusinessWithInvitesResponse {
  getCompaniesAndBusinessWithInvites?: ICompaniesAndBusinessWithInvitesList
}

export interface IGetAllCompaniesAndBusinessWithInvitesResponse {
  getAllCompaniesAndBusinessWithInvites?: ICompaniesAndBusinessWithInvitesList
}
