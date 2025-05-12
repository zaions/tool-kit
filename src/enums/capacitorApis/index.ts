import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing different states of geo location permission.
 */
export enum GeoLocationPermissionStateEnum {
  denied = 'denied',
  granted = 'granted',
}

/**
 * Enum representing different response codes for geo location.
 */
export enum GeoLocationResponseCodeEnum {
  unknownError = -1,
  success = 0,
  permissionDenied = 1,
  positionUnavailable = 2,
  timeout = 3,
  geolocationNotSupportedByBrowser = 4,
}

/**
 * Enum representing different platforms supported by Capacitor.
 */
export enum CapacitorPlatformEnum {
  web = 'web',
  ios = 'ios',
  android = 'android',
}

/**
 * Check for duplicate values in the GeoLocationPermissionStateEnum.
 */
checkForDuplicateEnumValues(
  GeoLocationPermissionStateEnum,
  'duplicate values in GeoLocationPermissionStateEnum'
);

/**
 * Check for duplicate values in the GeoLocationResponseCodeEnum.
 */
checkForDuplicateEnumValues(
  GeoLocationResponseCodeEnum,
  'duplicate values in GeoLocationResponseCodeEnum'
);

/**
 * Check for duplicate values in the CapacitorPlatformEnum.
 */
checkForDuplicateEnumValues(
  CapacitorPlatformEnum,
  'duplicate values in CapacitorPlatformEnum'
);
