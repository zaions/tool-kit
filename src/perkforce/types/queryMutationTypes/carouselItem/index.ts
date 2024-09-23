import { IPerk } from '../perk'
import { IUser } from '../user'

export interface ICarouselItem {
  _id?: string
  name?: string
  details?: string
  image?: string
  perk?: IPerk
  order?: number
  createdBy?: IUser
  createdAt?: string
}

export interface IGetCarouselItemsResponse {
  getCarouselItems?: Array<ICarouselItem>
}
