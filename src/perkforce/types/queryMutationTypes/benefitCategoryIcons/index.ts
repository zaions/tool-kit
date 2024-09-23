export interface IBenefitCategoryIconsData {
  _id?: string
  title?: string
  keywords?: string
  iconUrl?: string
  enabled?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface IGetBenefitCategoryIconsResponse {
  getBenefitCategoryIcons?: IBenefitCategoryIcons
}

export interface IBenefitCategoryIcons {
  data?: Array<IBenefitCategoryIconsData>
  count?: string
  canLoadMore?: boolean
  success?: boolean
  message?: string
}
