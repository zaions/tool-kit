import { IUser } from '../user'

export interface ICompaniesData {
  data?: Array<IUser>
  success?: boolean
  message?: string
}

export interface ICompaniesForMerchantPerkRedeem {
  data?: {
    _id?: string
    email?: string
    companyName?: string
  }
  success?: boolean
  message?: string
}

export interface IGetCompaniesForMerchantPerkRedeemResponse {
  getCompaniesForMerchantPerkRedeem?: ICompaniesData
}

export interface IGetCompaniesForAdminBenefitCategoriesResponse {
  getCompaniesForAdminBenefitCategories?: ICompaniesData
}
