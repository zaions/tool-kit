export { checkForDuplicateEnumValues } from './helpers/helpersNeedToLoadBeforeTheyGetUsed/index';

export {
  convertToDateTimestampToStoreInDB,
  getDateFromFrbTimestamp,
} from '../require-package/dayjs';
export { apiHeaderKeys } from './constants/apiConstants';
export { frbCollectionQueryDefaults } from './constants/firebaseConstants';
export {
  allowedImageTypes,
  apiConstants,
  dateFormat,
  dayjs,
  defaultValue,
  fieldsValidation,
  svgIconTypes,
  timeUnitType,
  urlParams,
  urlTarget,
} from './constants/generic';
export { permissionsData } from './constants/permissions';
export { rolePermissionsMap } from './constants/rolePermissionsConstants';
export { reportCustomError } from './helpers/errorHandler';
export {
  addUrlProtocolHandler,
  buildFilterObject,
  calcCrow,
  checkEqualityOfTwoArray,
  checkIfKeyExists,
  checkVariableType,
  containQueryParams,
  containSpecialCharacters,
  convertToTitleCase,
  convertToTitleCaseV1,
  dbItemIsBlocked,
  detectDeviceAndViewMode,
  dumpValueNoLogNothing,
  emptyVoidReturnFunction,
  emptyVoidReturnFunctionPromise,
  flattenArray,
  generateSlug,
  generateUniqueCode,
  generateUUID,
  getActiveFilters,
  getDBTimeColumnValue,
  getImageAspectRatio,
  getImageBase64Url,
  getImageDimensions,
  getObjectKey,
  getZUniqueKey,
  imageTypeAllowed,
  imageUrlToBase64,
  isArray,
  isEqual,
  isFileTypeAllowed,
  isFunction,
  isNotNullOrUndefined,
  isNullOrUndefined,
  isObject,
  isSoftDeleted,
  isStringVariable,
  isValidEmail,
  isValidUrl,
  isValidVanityUrl,
  isZNonEmptyString,
  isZNonEmptyStrings,
  isZValidNumber,
  isZValidNumbers,
  normalizeEnumValue,
  replaceUrlDynamicParts,
  toRad,
  truncateString,
  validateFileBeforeUpload,
  zConvertToBoolean,
  zJsonParse,
  zStringify,
  ZTotalPages,
} from './helpers/generic';
export {
  getPermissions,
  getUserRoleEnumValueFromString,
  hasPermission,
  mapPermissionsToStrings,
  validateExcludedPermissions,
  validateRequiredPermissions,
  validateUserPermissions,
} from './helpers/rolePermissionsHelpers';
export {
  validateEmail,
  validatePhoneNumber,
  validateURL,
} from './helpers/validators';
export { ztkMessages } from './messages';
