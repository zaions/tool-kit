// Enums

// Interface
export interface IMerchant {
  _id: string
  userId: string
  name: string
  description?: string
  createdAt?: Date
  onboarded?: string
  deletedAt?: Date
}

export interface IMainBanner {
  _id?: string
  logo?: string
  title?: string
  description?: string
  btnText?: string
  image?: string
  priority?: number
  onHome?: boolean
  merchantId?: IMerchant
  createdAt?: Date
  deletedAt?: Date
}

export interface ICard {
  _id?: string
  logo?: string
  description?: string
  image?: string
  merchantId?: IMerchant
  priority?: number
  onHome?: boolean
  createdAt?: Date
  deletedAt?: Date
}

export interface ICardOrBannerResult {
  _id?: string
  logo?: string
  title?: string
  description?: string
  btnText?: string
  image?: string
  merchantId?: IMerchant
  priority?: number
  onHome?: boolean
  createdAt?: Date
  deletedAt?: Date
}

export interface IGetEmployeeHomeBannerInterface {
  getEmployeeHomeBanner?: Array<IMainBanner>
}

export interface IGetEmployeeHomeCardsInterface {
  getEmployeeHomeCards?: Array<ICard>
}

export interface IGetMerchantByIdResponse {
  getMerchantById?: string
}

export interface IGetMerchantsResponse {
  getMerchants?: Array<IMerchant>
}

export interface IGetMerchantByUserIdResponse {
  getMerchantByUserId?: IMerchant
}

export interface IGetMerchantByCardIdResponse {
  getMerchantByCardId?: IMerchant
}

export interface IGetCardOrBannerRespose {
  getCardOrBanner?: ICardOrBannerResult
}
