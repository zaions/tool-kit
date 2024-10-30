import { checkForDuplicateEnumValues } from '@utils/index';

export enum GeoLocationPermissionStateEnum {
  denied = 'denied',
  granted = 'granted',
}

export enum GeoLocationResponseCodeEnum {
  unknownError = -1,
  success = 0,
  permissionDenied = 1,
  positionUnavailable = 2,
  timeout = 3,
  geolocationNotSupportedByBrowser = 4,
}

export enum CapacitorPlatformEnum {
  web = 'web',
  ios = 'ios',
  android = 'android',
}

checkForDuplicateEnumValues(
  GeoLocationPermissionStateEnum,
  'duplicate values in GeoLocationPermissionStateEnum'
);

checkForDuplicateEnumValues(
  GeoLocationResponseCodeEnum,
  'duplicate values in GeoLocationResponseCodeEnum'
);

checkForDuplicateEnumValues(
  CapacitorPlatformEnum,
  'duplicate values in CapacitorPlatformEnum'
);
