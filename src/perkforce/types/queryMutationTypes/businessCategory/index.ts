import { ISubCategory } from '../subCategories'
import { IUser } from '../user'

// Interfaces
export interface ICategoriesPerksCount {
  _id?: string
  perksCount?: string[]
}

export interface IBusinessCategory {
  _id?: string
  name?: string
  slug?: string
  createdBy?: IUser
  addedBy?: IUser
  createdAt?: Date
  subCategories?: Array<ISubCategory>
  subCatUser?: Array<IUser>
  order?: number
  deletedAt?: Date
  iconUrl?: string

  //
  key?: number | string
  index?: number
  containPerks?: boolean
  isDefault?: boolean
}

export interface IBusinessCategoriesList {
  categories?: Array<IBusinessCategory>
  count?: number
  categoriesPerksCount?: Array<ICategoriesPerksCount>
  activePerksCount?: number
}

export interface IBusinessCategoriesListForAdmin {
  categories?: Array<IBusinessCategory>
  count?: number
}

export interface IBusinessCategoriesList {
  categories?: Array<IBusinessCategory>
  count?: number
  categoriesPerksCount?: Array<ICategoriesPerksCount>
  activePerksCount?: number
}

export interface IGetBusinessCategoriesByUserResponse {
  getBusinessCategoriesByUser?: IBusinessCategoriesList
}

export interface IGetBusinessCategoryBySubCategoryResponse {
  getBusinessCategoryBySubCategory?: IBusinessCategory
}

export interface IGetBusinessCategoriesForAdminResponse {
  getBusinessCategoriesForAdmin?: IBusinessCategoriesListForAdmin
}
