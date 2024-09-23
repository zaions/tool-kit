import { IPerk, IPerkList } from '../perk'
import { IUser } from '../user'

export interface IBrandCarouselItem {
  _id?: string
  details?: string
  image?: string
  perk?: IPerk
  createdBy?: IUser
  createdAt?: string
  deletedAt?: string
}

export interface IGetBrandCarouselItemsResponse {
  getBrandCarouselItems?: Array<IBrandCarouselItem>
}

export interface IGetPerksForCarouselResponse {
  getPerksForCarousel?: IPerkList
}
