import { checkForDuplicateEnumValues } from '@utils/index';

export enum ResponseCodeEnum {
  success = 'success',
  failed = 'failed',
  notFound = 'notFound', // data not found
  badRequest = 'badRequest', // Means data is invalid
  serverError = 'serverError', // some server error (try catch etc, which is not covered by defined cases and is in default else case)
  created = 'created',
  deleted = 'deleted',
  updated = 'updated',
  tooManyRequests = 'tooManyRequests',
  invalidRequest = 'invalidRequest', // invalid url/api request which does not exists in express app router/routes for that OnRequest expressHandler
  unAuthenticated = 'unAuthenticated',
  unAuthorized = 'unAuthorized',
  itemExists = 'itemExists',
}
export enum ResponseStatusEnum {
  success = 200,
  failed = 500,
  notFound = 404,
  badRequest = 400,
  created = 201,
  unAuthenticated = 401,
  unAuthorized = 403,
  tooManyRequests = 429,
  invalidRequest = 410,
  itemExists = 10001,
}
export enum RequestTypeEnum {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}
export enum LinkTargetEnum {
  blank = '_blank',
}
export enum SearchParamKeysEnum {
  encryptedDataSearchParam = 's',
}
export enum RequestContentTypeEnum {
  Json = 'application/json',
  FormData = 'multipart/form-data',
}
export enum RequestStatusEnum {
  approved = 1,
  rejected = 2,
}
export enum TransferMethodEnum {
  easypaisa = 1,
  jazzcash = 2,
}
export enum QueryKeyTypeEnum {
  id = 1,
  roomCode = 2,
  email = 3,
  phoneNumber = 4,
}
export enum ProcessStatusEnum {
  completed = 1,
  rejected = 2,
}
export enum BooleanEnum {
  true = 1,
  false = 0,
}
export enum varTypesEnum {
  STRING = 'string',
  OBJECT = 'object',
  ARRAY = 'array',
  boolean = 'boolean',
  NUMBER = 'number',
  FUNCTION = 'function',
}

checkForDuplicateEnumValues(
  ResponseCodeEnum,
  'duplicate values in ResponseCodeEnum'
);
checkForDuplicateEnumValues(
  ResponseStatusEnum,
  'duplicate values in ResponseStatusEnum'
);
checkForDuplicateEnumValues(
  RequestTypeEnum,
  'duplicate values in RequestTypeEnum'
);
checkForDuplicateEnumValues(
  LinkTargetEnum,
  'duplicate values in LinkTargetEnum'
);
checkForDuplicateEnumValues(
  SearchParamKeysEnum,
  'duplicate values in SearchParamKeysEnum'
);
checkForDuplicateEnumValues(
  RequestContentTypeEnum,
  'duplicate values in RequestContentTypeEnum'
);
checkForDuplicateEnumValues(
  RequestStatusEnum,
  'duplicate values in RequestStatusEnum'
);
checkForDuplicateEnumValues(
  TransferMethodEnum,
  'duplicate values in TransferMethodEnum'
);
checkForDuplicateEnumValues(
  QueryKeyTypeEnum,
  'duplicate values in QueryKeyTypeEnum'
);
checkForDuplicateEnumValues(
  ProcessStatusEnum,
  'duplicate values in ProcessStatusEnum'
);
checkForDuplicateEnumValues(BooleanEnum, 'duplicate values in BooleanEnum');
checkForDuplicateEnumValues(varTypesEnum, 'duplicate values in varTypesEnum');
