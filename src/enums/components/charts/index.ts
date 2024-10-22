import { checkForDuplicateEnumValues } from '@utils/index';

export enum CharTypeEnum {
  bar = 'bar',
  line = 'line',
  doughnut = 'doughnut',
  pie = 'pie',
  polar = 'polar',
}

checkForDuplicateEnumValues(CharTypeEnum, 'duplicate values in CharTypeEnum');
