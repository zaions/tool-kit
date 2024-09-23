// import { type DeviceId, type DeviceInfo } from '@capacitor/device'

export interface ISettings {
  _id?: string
  allowSignUp?: boolean
  allowCarousel?: boolean
  allowCarouselForEmployers?: boolean
  allowCarouselForColleges?: boolean
  stripeAppFeePercentForBusinesses?: number
  stripeAppFeePercentForCompanies?: number
  stripeAppFeePercentForUniversities?: number
  perksPerBusiness?: number
  carouselItemsPerBusiness?: number
  perksPerCompany?: number
  benefitsPerCompany?: number
  perksPerPage?: number
  perkFormAlertUptoConnections?: number
  skipPhoneStep?: boolean
}

export interface IAppFeaturesState {
  _id?: string
  appDomain?: string
  isDefault?: boolean
  appFeaturesState?: string
  success?: boolean
  message?: string
}

export interface INewSignupsSettingType {
  newSignupsEmployerEmail?: string
  newSignupsCheckEnabled?: boolean
}

export interface IMobileAppInfoType {
  androidAppLink?: string
  androidAppVersionCode?: number
  androidAppVersionText?: string
  iosAppLink?: string
  iosAppVersionCode?: number
  iosAppVersionText?: string
  forceMobileAppUseForUsers?: Array<string> // this will be array with user account type and on frontend i will check which account types are mentioned in this array and will force them to download the perkforce mobile app
  maintenanceModeEnabled?: boolean
  managersIdsToAllowDesktopAppUse?: Array<string>
}

export interface IDeviceAndBundledAppInfo {
  // Locally installed API data
  mobileAppIsUptoDate?: boolean | null
  installedAppVersionText?: string | null
  installedAppVersionCode?: number | string | null
  platform?: string | null
  // deviceId?: string | DeviceId | null
  deviceId?: any
  deviceUUID?: string | null
  // deviceInfo?: string | DeviceInfo | null
  deviceInfo?: any
  deviceLanguageCode?: string | null
  deviceLanguageTag?: string | null
  deviceName?: string | null
  deviceModel?: string | null
  devicePlatform?: string | null
  deviceOperatingSystem?: string | null
  deviceOSVersion?: string | null
  deviceManufacturer?: string | null
  deviceISVirtual?: boolean | null
  deviceWebViewVersion?: string | null

  // Backend API fetched data
  androidAppLink?: string
  iosAppLink?: string
  androidAppVersionText?: string
  iosAppVersionText?: string
  androidAppVersionCode?: number
  iosAppVersionCode?: number | string
  forceMobileAppUseForUsers?: boolean | null
  maintenanceModeEnabled?: boolean
  managersIdsToAllowDesktopAppUse?: string[] | null

  // Calculated data
  minVersionTextRequiredByApi?: string | null
  minVersionCodeRequiredByApi?: number | string | null
  installedAppVersionTextIsValid?: boolean | null
}

export interface IGetSettingsResponse {
  getSettings?: ISettings
}

export interface IGetAppFeaturesStateResponse {
  getAppFeaturesState?: IAppFeaturesState
}

export interface IFetchNewSignupsSettingResponse {
  getSettings?: INewSignupsSettingType
}

export interface IFetchMobileAppInfoResponse {
  fetchMobileAppInfo?: IMobileAppInfoType
}
