
import { TEST_ACCOUNTS_TYPE, USER_TYPE } from "src/perkforce/enums"
import { IUser } from "../user"

export interface ITestAccount {
  _id?: string
  testAccountUserId?: IUser
  testAccountUserEmail?: string
  testAccountType?: TEST_ACCOUNTS_TYPE
  description?: string
  isActive?: boolean

  // Read Only values - added by code at runtime (not available in DB)
  finalCompanyName?: string
  finalVanityUrl?: string
  userType?: USER_TYPE
}

export interface ITestAccountsResultForEndUser {
  externalTesterEmails?: Array<string>
  internalTesterEmails?: Array<string>
  success?: boolean
  message?: string
  excludeTestAccounts?: boolean
}

export interface ITestAccountsResultForAdmin {
  testAccounts?: Array<ITestAccount>
  success?: boolean
  message?: string
  excludeTestAccounts?: boolean
  testAccountsCount?: number
  testersCompanyNames?: Array<string>
  testersVanityUrls?: Array<string>
}

export interface IGetTestAccountsEndUserResponse {
  getTestAccountsEndUser?: ITestAccountsResultForEndUser
}

export interface IGetTestAccountsAdminResponse {
  getTestAccountsAdmin?: ITestAccountsResultForAdmin
}
