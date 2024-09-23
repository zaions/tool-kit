import { IUser } from '../user'

export interface ICarouselSetting {
  _id?: string
  autoplay?: boolean
  autoplaySpeed?: number
  effect?: string
  dots?: boolean
  arrows?: boolean
  createdBy?: IUser
}

export interface IGetCarouselSettingResponse {
  getCarouselSetting?: ICarouselSetting
}

export interface IGetCarouselSettingResponse {
  getCarouselSetting?: ICarouselSetting
}
