import { IPerkCategory } from '../perkCategory'

export interface IPerkCategoryClickItem {
  _id?: string
  count?: number
  perkCategory?: IPerkCategory
}

export interface IGetPerkCategoryClicksResponse {
  getPerkCategoryClicks?: PerkCategoryClicksList
}

export interface PerkCategoryClicksList {
  perkCategoryClicks?: Array<IPerkCategoryClickItem>
  count?: number
}
