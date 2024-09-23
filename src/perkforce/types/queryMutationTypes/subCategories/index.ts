import { IUser } from '../user'

export interface ISubCategory {
  _id?: string
  name?: string
  slug?: string
  categoryId: string
  order?: number
  isDefault?: boolean
  createdBy?: string
  addedBy?: IUser
  createdAt?: string
  count?: number
  perkCount?: number
  draftCount?: number
  deletedAt?: string
}

export interface IGetSubCategoriesResponse {
  getSubCategories?: Array<ISubCategory>
}

export interface IGetSubCategoryBySlugResponse {
  getSubCategoryBySlug?: ISubCategory
}
