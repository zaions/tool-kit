import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing different types of charts.
 */
export enum CharTypeEnum {
  bar = 'bar',
  line = 'line',
  doughnut = 'doughnut',
  pie = 'pie',
  polar = 'polar',
}

/**
 * Check for duplicate values in the CharTypeEnum.
 */
checkForDuplicateEnumValues(CharTypeEnum, 'duplicate values in CharTypeEnum');
