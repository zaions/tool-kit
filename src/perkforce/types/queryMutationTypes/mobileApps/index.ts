import { DATA_STORED_FROM, PLATFORM } from 'src/perkforce/enums';
import { IUser } from '../user';

// interface
export interface IUserMobileInfoData {
  userId?: IUser;
  userEmail?: string;
  deviceUUID?: string;
  mobileAppIsUptoDate?: boolean;
  installedAppVersionText?: string;
  installedAppVersionCode?: number;
  deviceLanguageCode?: string;
  deviceLanguageTag?: string;
  deviceName?: string;
  deviceModel?: string;
  devicePlatform?: PLATFORM;
  deviceOperatingSystem?: string;
  deviceOSVersion?: string;
  deviceManufacturer?: string;
  deviceISVirtual?: boolean;
  deviceWebViewVersion?: string;
  dataStoredFrom?: DATA_STORED_FROM;
  createdAt?: string;
  updatedAt?: string;
}

export interface IManagersListWhereDesktopIsAllowed {
  _id?: string;
  email?: string;
  description?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IManagersListWhereDesktopIsAllowedResult {
  items?: Array<IManagersListWhereDesktopIsAllowed>;
  count?: number;
  success?: boolean;
  message?: string;
}

export interface IUserMobileInfoDataList {
  items?: Array<IUserMobileInfoData>;
  count?: number;
  success?: boolean;
  message?: string;
}

export interface IGetUserMobileAppInfoListResponse {
  getUserMobileAppInfoList?: IUserMobileInfoDataList;
}

export interface IGetManagersListWhereDesktopIsAllowedResponse {
  getManagersListWhereDesktopIsAllowed?: IManagersListWhereDesktopIsAllowedResult;
}
