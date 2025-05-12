import {
  CapacitorPlatformEnum,
  GeoLocationResponseCodeEnum,
} from '@app-enums/capacitorApis';

/**
 * Type representing the response from the getCapGeoLocationApiData function.
 */
export type GetCapGeoLocationApiDataResponse = {
  coords: Partial<GeolocationCoordinates> | null;
  message: string;
  code: GeoLocationResponseCodeEnum;
  success: boolean;
};

/**
 * Type representing the platform data.
 */
export interface PlatformData {
  platform: CapacitorPlatformEnum;
  isNative: boolean;
  isAndroid: boolean;
  isIOS: boolean;
  isWeb: boolean;
}
