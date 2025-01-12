import {
  CapacitorPlatformEnum,
  GeoLocationResponseCodeEnum,
} from '@app-enums/capacitorApis';

export type GetCapGeoLocationApiDataResponse = {
  coords: Partial<GeolocationCoordinates> | null;
  message: string;
  code: GeoLocationResponseCodeEnum;
  success: boolean;
};

export interface PlatformData {
  platform: CapacitorPlatformEnum;
  isNative: boolean;
  isAndroid: boolean;
  isIOS: boolean;
  isWeb: boolean;
}
