import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing different types of alerts.
 */
export enum AlertTypeEnum {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

/**
 * Check for duplicate values in the AlertTypeEnum.
 */
checkForDuplicateEnumValues(AlertTypeEnum, 'duplicate values in AlertTypeEnum');
