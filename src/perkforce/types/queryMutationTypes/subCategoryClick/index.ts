import { ISubCategory } from '../subCategories'
import { IUser } from '../user'

export interface SubCategoryClickItem {
  _id?: string
  count?: number
  subCategory?: ISubCategory
  employer?: IUser
}

export interface SubCategoryClicksList {
  subCategoryClicks?: Array<SubCategoryClickItem>
  count?: number
}

export interface IGetSubCategoryClicksResponse {
  getSubCategoryClicks?: SubCategoryClicksList
}
