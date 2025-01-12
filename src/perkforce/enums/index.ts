import { checkForDuplicateEnumValues } from '@app-utils/index';

export enum USER_TYPE {
  employer = 'EMPLOYER',
  employee = 'EMPLOYEE',
  merchant = 'MERCHANT',
  student_body = 'STUDENT_BODY',
  admin = 'ADMIN',
}
export enum INVITE_STATUS {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
}
export enum PERK_STATUS {
  DRAFT = 'DRAFT',
  APPROVED = 'APPROVED',
  LIVE = 'LIVE',
  SCHEDULED = 'SCHEDULED',
  ENDED = 'ENDED',
  ENDINGSOON = 'ENDINGSOON',
}
export enum PERK_BRAND_LOGO {
  NO_LOGO = 'NO_LOGO',
  USE_PERK_LOGO = 'USE_PERK_LOGO',
  USE_PROFILE_LOGO = 'USE_PROFILE_LOGO',
}
export enum EMAIL_DOMAIN_STATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
export enum PERK_REDEEM_STATUS {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
  PENDING = 'pending',
}
export enum ORDER_TYPE {
  PURCHASED = 'PURCHASED',
  FREE = 'FREE',
}
export enum UNAVAILABLE_ITEM_TYPE {
  OUT_OF_STOCK = 'out_of_stock',
  PER_USER_LIMIT_REACHED = 'per_user_limit_reached',
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  EXPIRED = 'expired',
  DELETED = 'deleted',
}
export enum GROUP_TYPE {
  SUPER_USERS = 'super_users',
  ALL_USERS = 'all_users',
}
export enum FORM_MODE {
  ADD = 'add',
  EDIT = 'edit',
}
export enum REDEEM_CODE_TYPE {
  TEXT = 'text',
  FILE = 'file',
  URL = 'url',
}
export enum ALLOWED_ACCESS_BECAUSE {
  MANUAL = 'MANUAL',
  EMAIL_FORMAT = 'EMAIL_FORMAT',
  NEW_SIGNUPS_EMPLOYEES = 'NEW_SIGNUPS_EMPLOYEES',
}
export enum PLATFORM {
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web',
}
export enum VALIDATION_RULE {
  string = 'string',
  email = 'email',
  password = 'password',
  positiveInt = 'positiveInt',
  url = 'url',
}
export enum MOBILE_DATA_STORED_FROM {
  mobileBrowser = 'browser',
  mobileApp = 'app',
}
export enum TEST_ACCOUNTS_TYPE {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}
export enum INTEGRATION_APP {
  MICROSOFT_TEAMS = 'microsoft_teams',
  SLACK = 'slack',
  STRIPE = 'stripe',
}
export enum INTEGRATION_STATE {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  NOT_CONNECTED = 'not_connected',
}
export enum BudgetStatusE {
  NOT_CLAIMED = 'NOT_CLAIMED',
  REQUESTED = 'REQUESTED',
  GRANTED = 'GRANTED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
  REFUNDED = 'REFUNDED',
}
export enum PLATFORM {
  android = 'android',
  ios = 'ios',
  web = 'web',
}
export enum DATA_STORED_FROM {
  mobileBrowser = 'mobile-browser',
  mobileApp = 'mobile-app',
}
export enum SCHEDULED_STATUS {
  LIVE = 'LIVE',
  SCHEDULED = 'SCHEDULED',
  ENDED = 'ENDED',
}
export enum ALL_PERK_STATUS {
  DRAFT = 'DRAFT',
  APPROVED = 'APPROVED',
  LIVE = 'LIVE',
  SCHEDULED = 'SCHEDULED',
  ENDED = 'ENDED',
  ENDINGSOON = 'ENDINGSOON',
}
export enum IMPORT_REDEEM_CODES_TYPE {
  file = 'file',
  csv = 'csv',
}
export enum CAPTURE_METHOD {
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL',
}
checkForDuplicateEnumValues(USER_TYPE, 'duplicate values in USER_TYPE');
checkForDuplicateEnumValues(INVITE_STATUS, 'duplicate values in INVITE_STATUS');
checkForDuplicateEnumValues(PERK_STATUS, 'duplicate values in PERK_STATUS');
checkForDuplicateEnumValues(
  PERK_BRAND_LOGO,
  'duplicate values in PERK_BRAND_LOGO'
);
checkForDuplicateEnumValues(
  EMAIL_DOMAIN_STATUS,
  'duplicate values in EMAIL_DOMAIN_STATUS'
);
checkForDuplicateEnumValues(
  PERK_REDEEM_STATUS,
  'duplicate values in PERK_REDEEM_STATUS'
);
checkForDuplicateEnumValues(ORDER_TYPE, 'duplicate values in ORDER_TYPE');
checkForDuplicateEnumValues(
  UNAVAILABLE_ITEM_TYPE,
  'duplicate values in UNAVAILABLE_ITEM_TYPE'
);
checkForDuplicateEnumValues(GROUP_TYPE, 'duplicate values in GROUP_TYPE');
checkForDuplicateEnumValues(FORM_MODE, 'duplicate values in FORM_MODE');
checkForDuplicateEnumValues(
  REDEEM_CODE_TYPE,
  'duplicate values in REDEEM_CODE_TYPE'
);
checkForDuplicateEnumValues(
  ALLOWED_ACCESS_BECAUSE,
  'duplicate values in ALLOWED_ACCESS_BECAUSE'
);
checkForDuplicateEnumValues(PLATFORM, 'duplicate values in PLATFORM');
checkForDuplicateEnumValues(
  VALIDATION_RULE,
  'duplicate values in VALIDATION_RULE'
);
checkForDuplicateEnumValues(
  MOBILE_DATA_STORED_FROM,
  'duplicate values in MOBILE_DATA_STORED_FROM'
);
checkForDuplicateEnumValues(
  TEST_ACCOUNTS_TYPE,
  'duplicate values in TEST_ACCOUNTS_TYPE'
);
checkForDuplicateEnumValues(
  INTEGRATION_APP,
  'duplicate values in INTEGRATION_APP'
);
checkForDuplicateEnumValues(
  INTEGRATION_STATE,
  'duplicate values in INTEGRATION_STATE'
);
checkForDuplicateEnumValues(BudgetStatusE, 'duplicate values in BudgetStatusE');
checkForDuplicateEnumValues(PLATFORM, 'duplicate values in PLATFORM');
checkForDuplicateEnumValues(
  DATA_STORED_FROM,
  'duplicate values in DATA_STORED_FROM'
);
checkForDuplicateEnumValues(
  SCHEDULED_STATUS,
  'duplicate values in SCHEDULED_STATUS'
);
checkForDuplicateEnumValues(
  ALL_PERK_STATUS,
  'duplicate values in ALL_PERK_STATUS'
);
checkForDuplicateEnumValues(
  IMPORT_REDEEM_CODES_TYPE,
  'duplicate values in IMPORT_REDEEM_CODES_TYPE'
);
checkForDuplicateEnumValues(
  CAPTURE_METHOD,
  'duplicate values in CAPTURE_METHOD'
);
