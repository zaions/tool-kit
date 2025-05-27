import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing different address component types.
 */
export enum AddressComponentTypeEnum {
  COUNTRY = 'country',
  STREET_ADDRESS = 'street_address',
  APT_SUITE = 'subpremise',
  CITY = 'city',
  PROVINCE = 'administrative_area_level_1',
  POST_CODE = 'postal_code',
  NEIGHBORHOOD = 'neighborhood',
  ROUTE = 'route',
  LOCALITY = 'locality',
  PREMISE = 'premise',
}

/**
 * Check for duplicate values in the AddressComponentTypeEnum.
 */
checkForDuplicateEnumValues(
  AddressComponentTypeEnum,
  'duplicate values in AddressComponentTypeEnum'
);
