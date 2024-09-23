import { IUser } from '../user'

// Enums
export enum PLATFORM {
  android = 'android',
  ios = 'ios',
  web = 'web'
}

export enum DATA_STORED_FROM {
  mobileBrowser = 'mobile-browser',
  mobileApp = 'mobile-app'
}

// interface
export interface IUserMobileInfoData {
  userId?: IUser
  userEmail?: string
  deviceUUID?: string
  mobileAppIsUptoDate?: boolean
  installedAppVersionText?: string
  installedAppVersionCode?: number
  deviceLanguageCode?: string
  deviceLanguageTag?: string
  deviceName?: string
  deviceModel?: string
  devicePlatform?: PLATFORM
  deviceOperatingSystem?: string
  deviceOSVersion?: string
  deviceManufacturer?: string
  deviceISVirtual?: boolean
  deviceWebViewVersion?: string
  dataStoredFrom?: DATA_STORED_FROM
  createdAt?: string
  updatedAt?: string
}

export interface IManagersListWhereDesktopIsAllowed {
  _id?: string
  email?: string
  description?: string
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface IManagersListWhereDesktopIsAllowedResult {
  items?: Array<IManagersListWhereDesktopIsAllowed>
  count?: number
  success?: boolean
  message?: string
}

export interface IUserMobileInfoDataList {
  items?: Array<IUserMobileInfoData>
  count?: number
  success?: boolean
  message?: string
}

export interface IGetUserMobileAppInfoListResponse {
  getUserMobileAppInfoList?: IUserMobileInfoDataList
}

export interface IGetManagersListWhereDesktopIsAllowedResponse {
  getManagersListWhereDesktopIsAllowed?: IManagersListWhereDesktopIsAllowedResult
}
