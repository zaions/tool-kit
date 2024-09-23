import { IBusinessCategory } from '../businessCategory'
import { IUser } from '../user'

// Interface
export interface IBusinessCategoryClickItem {
  _id?: string
  count?: number
  businessCategory?: IBusinessCategory
  employer?: IUser
}

export interface IGetBusinessCategoryClicksResponse {
  getBusinessCategoryClicks?: IBusinessCategoryClicksList
}

export interface IBusinessCategoryClicksList {
  businessCategoryClicks?: Array<IBusinessCategoryClickItem>
  count?: number
}
