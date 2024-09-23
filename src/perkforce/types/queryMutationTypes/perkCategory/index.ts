export interface IPerkCategory {
  _id?: string
  name?: string
  slug?: string
  isDefault?: boolean
  order?: number
  createdAt?: string
  perkCount?: number
  draftCount?: number
  deletedAt?: string
  isPopular?: boolean
  newArrival?: boolean

  key?: number | string
}

export interface IGetPerkCategoryBySlugResponse {
  getPerkCategoryBySlug: IPerkCategory
}

export interface IPerkCategoriesList {
  perkCategories?: Array<IPerkCategory>
  count?: number
}

export interface IGetPerkCategoriesResponse {
  getPerkCategories: IPerkCategoriesList
}
