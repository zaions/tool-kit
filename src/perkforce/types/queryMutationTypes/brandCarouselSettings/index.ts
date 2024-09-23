import { IUser } from '../user'

export interface IBrandCarouselSetting {
  _id?: string
  autoplay?: boolean
  autoplaySpeed?: number
  effect?: string
  dots?: boolean
  createdBy?: IUser
  deletedAt?: string
  arrows?: boolean
  fade?: boolean
}

export interface IGetBrandCarouselSettingResponse {
  getBrandCarouselSetting?: IBrandCarouselSetting
}

export interface IUpdateBrandCarouselSettingResult {
  success?: boolean
  message?: string
  limitReached?: number
}
