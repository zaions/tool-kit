import { checkForDuplicateEnumValues } from '@app-utils/index';

export enum AlertTypeEnum {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

checkForDuplicateEnumValues(AlertTypeEnum, 'duplicate values in AlertTypeEnum');
