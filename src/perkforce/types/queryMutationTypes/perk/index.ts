import type { Dayjs } from 'dayjs';
import {
  PERK_BRAND_LOGO,
  SCHEDULED_STATUS,
  type PERK_STATUS,
} from 'src/perkforce/enums';
import { IBusinessCategory } from '../businessCategory';
import { IPerkCategory } from '../perkCategory';
import {
  ILastSlackNotificationInfo,
  ISlackNotificationsHistory,
} from '../slackBot';
import { ISubCategory } from '../subCategories';
import { IUser } from '../user';

// Interface
export interface ILocationPerk {
  lat?: number;
  lng?: number;
  desc?: string;
  className?: string;
}

export interface IRedeemCode {
  code?: string;
  url?: string;
  type?: string;
  expireDate?: string;
  file?: File;
}

export interface IMaxAllowedPerUserEveryDays {
  allowedPerUser?: number;
  allowedEveryDays?: number;
}

export interface IInterest {
  allowed?: boolean;
  email?: boolean;
}

export interface IPerk {
  _id?: string;
  name?: string;
  perkType?: string;
  useProfileLocation?: boolean;
  businessCategory?: IBusinessCategory;
  subCategory?: ISubCategory;
  perkCategory?: IPerkCategory;
  details: string;
  website?: string;
  contactName?: string;
  discountCode?: string;
  phoneNo?: string;
  image?: string;
  brandLogo?: string;
  createdBy?: IUser;
  createdBySuperUser?: IUser;
  status?: PERK_STATUS;
  brandLogoType?: PERK_BRAND_LOGO;
  createdAt?: string;
  locations?: Array<ILocationPerk>;
  alwaysDisplay?: boolean;
  displayFromDate?: string | Dayjs;
  displayUntilDate?: string | Dayjs;
  updatedAt?: string;
  notForGeneralPublic?: boolean;
  forUserType?: string;
  forUsers?: string[]; // ID mapped to string
  purchasable?: boolean;
  useRedeemCodes?: boolean;
  totalRedeemLimitAvailable?: boolean;
  hasMaxAllowedPerUser?: boolean;
  hasMaxAllowedPerUserEveryDays?: boolean;
  maxAllowedPerUserEveryDays?: IMaxAllowedPerUserEveryDays;
  maxAllowedPerUserEveryDaysPassed?: number; // Int mapped to number
  value?: number; // Float mapped to number
  totalRedeemLimit?: number;
  maxAllowedPerUser?: number;
  autoRedeemCodes?: boolean;
  deletedAt?: string;
  perkClicksCount?: number;
  slackNotificationsHistory?: Array<ISlackNotificationsHistory>;
  lastSlackNotificationInfo?: ILastSlackNotificationInfo;
  forGroups?: string[]; // ID mapped to string
  perkDetailsText?: string;
  interest?: IInterest;
  currentUserInterestRegistered?: boolean;
  scheduledStatus?: SCHEDULED_STATUS; // Assuming SCHEDULED_STATUS is converted to ScheduledStatus enum
  startDate?: string;
  endDate?: string;

  // not available in backend code but is being used in frontend code, so adding as optional to remove the typescript error
  isAlwaysAvailable?: boolean;
  displayNow?: boolean;
}

export interface IPerkList {
  perks?: Array<IPerk>;
  count?: number;
}

export interface IPerkManagement {
  step?: string;
  searchQuery?: { value?: string; trigger?: boolean };
  userTypeFilter?: string | null;
  purchasableFilter?: boolean;
  status?: string | null;
  showReferralModal?: boolean;
  showInviteModal?: boolean;
  showPageOptions?: boolean;
  processing?: boolean;
}

export interface IGetPerksByUserResponse {
  getPerksByUser?: {
    perks?: Array<IPerk>;
    count?: number;
    perksPerPage?: number;
    isValidCategory?: boolean;
    isValidSubCategory?: boolean;
  };
}

export interface IGetPerkByIdResponse {
  getPerkById?: {
    perk?: IPerk;
    perkRedeemCodes?: IRedeemCode;
    userAllowanceReached?: boolean;
  };
}

export interface IGetAllowPerkDeleteResponse {
  getAllowPerkDelete?: boolean;
}

export interface IGetAllowPerkRedeemResponse {
  getAllowPerkRedeem?: boolean;
}

export interface IGetPurchasablePerksResponse {
  getPurchasablePerks?: Array<IPerk>;
}

export interface IAdminGetPerksResponse {
  adminGetPerks?: IPerkList;
}

export interface IGetBrandPerksResponse {
  getBrandPerks?: IPerkList;
}

export interface IGetSuperUserPerksResponse {
  getSuperUserPerks?: Array<IPerk>;
}
