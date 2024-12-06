export { checkForDuplicateEnumValues } from './helpers/helpersNeedToLoadBeforeTheyGetUsed/index';

export {
  convertToDateTimestampToStoreInDB,
  getDateFromFrbTimestamp,
} from '../require-package/dayjs';
export { apiHeaderKeys } from './constants/apiConstants';
export { frbCollectionQueryDefaults } from './constants/firebaseConstants';
export {
  apiConstants,
  dateFormat,
  dayjs,
  defaultValue,
  fieldsValidation,
  timeUnitType,
  urlParams,
  urlTarget,
} from './constants/generic';
export { permissionsData } from './constants/permissions';
export { rolePermissionsMap } from './constants/rolePermissionsConstants';
export { reportCustomError } from './helpers/errorHandler';
export {
  ZTotalPages,
  convertToTitleCase,
  dbItemIsBlocked,
  dumpValueNoLogNothing,
  emptyVoidReturnFunction,
  emptyVoidReturnFunctionPromise,
  generateUniqueCode,
  getDBTimeColumnValue,
  getZUniqueKey,
  imageUrlToBase64,
  isArray,
  isNotNullOrUndefined,
  isNullOrUndefined,
  isSoftDeleted,
  isZNonEmptyString,
  isZNonEmptyStrings,
  isZValidNumber,
  isZValidNumbers,
  replaceUrlDynamicParts,
  zConvertToBoolean,
  zJsonParse,
  zStringify,
} from './helpers/generic';
export {
  getPermissions,
  getUserRoleEnumValueFromString,
  mapPermissionsToStrings,
} from './helpers/rolePermissionsHelpers';
export {
  validateEmail,
  validatePhoneNumber,
  validateURL,
} from './helpers/validators';
export { ztkMessages } from './messages';
