import { IPerk } from '../perk'

export interface IBenefitClickItem {
  _id?: string
  count?: string
  benefit?: IPerk
}

export interface IGetBenefitClicksResponse {
  getBenefitClicks?: IBenefitClicksList
}

export interface IBenefitClicksList {
  benefitClicks?: Array<IBenefitClickItem>
  count?: string
}
