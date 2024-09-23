export enum USER_TYPE {
  employer = 'EMPLOYER',
  employee = 'EMPLOYEE',
  merchant = 'MERCHANT',
  student_body = 'STUDENT_BODY',
  admin = 'ADMIN'
}

export enum INVITE_STATUS {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED'
}

export enum PERK_STATUS {
  DRAFT = 'DRAFT',
  APPROVED = 'APPROVED',
  LIVE = 'LIVE',
  SCHEDULED = 'SCHEDULED',
  ENDED = 'ENDED',
  ENDINGSOON = 'ENDINGSOON'
}

export enum PERK_BRAND_LOGO {
  NO_LOGO = 'NO_LOGO',
  USE_PERK_LOGO = 'USE_PERK_LOGO',
  USE_PROFILE_LOGO = 'USE_PROFILE_LOGO'
}

export enum EMAIL_DOMAIN_STATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum PERK_REDEEM_STATUS {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
  PENDING = 'pending'
}

export enum ORDER_TYPE {
  PURCHASED = 'PURCHASED',
  FREE = 'FREE'
}

export enum UNAVAILABLE_ITEM_TYPE {
  OUT_OF_STOCK = 'out_of_stock',
  PER_USER_LIMIT_REACHED = 'per_user_limit_reached',
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  EXPIRED = 'expired',
  DELETED = 'deleted'
}

export enum GROUP_TYPE {
  SUPER_USERS = 'super_users',
  ALL_USERS = 'all_users'
}

export enum FORM_MODE {
  ADD = 'add',
  EDIT = 'edit'
}

export enum REDEEM_CODE_TYPE {
  TEXT = 'text',
  FILE = 'file',
  URL = 'url'
}

export enum ALLOWED_ACCESS_BECAUSE {
  MANUAL = 'MANUAL',
  EMAIL_FORMAT = 'EMAIL_FORMAT',
  NEW_SIGNUPS_EMPLOYEES = 'NEW_SIGNUPS_EMPLOYEES'
}
export enum PLATFORM {
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web'
}
export enum VALIDATION_RULE {
  string = 'string',
  email = 'email',
  password = 'password',
  positiveInt = 'positiveInt',
  url = 'url'
}
export enum MOBILE_DATA_STORED_FROM {
  mobileBrowser = 'browser',
  mobileApp = 'app'
}

export enum TEST_ACCOUNTS_TYPE {
  INTERNAL = 'internal',
  EXTERNAL = 'external'
}

export enum INTEGRATION_APP {
  MICROSOFT_TEAMS = 'microsoft_teams',
  SLACK = 'slack',
  STRIPE = 'stripe'
}

export enum INTEGRATION_STATE {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  NOT_CONNECTED = 'not_connected'
}