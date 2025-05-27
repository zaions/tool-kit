import {
  CapacitorPlatformEnum,
  GeoLocationResponseCodeEnum,
} from '@app-enums/capacitorApis';

/**
 * Interface representing the coordinates of a geolocation.
 */
export interface GeolocationCoordinates {
  accuracy?: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  latitude?: number;
  longitude?: number;
  speed?: number | null;
}

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
