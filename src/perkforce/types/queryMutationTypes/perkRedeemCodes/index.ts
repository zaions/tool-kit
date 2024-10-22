import { REDEEM_CODE_TYPE } from 'src/perkforce/enums';

// Interface
export interface IPerkRedeemCode {
  _id?: string;
  userId?: string;
  perkId?: string;
  code?: string;
  type?: REDEEM_CODE_TYPE;
  url?: string;
  file?: string;
  expireDate?: string;
  purchasedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface IGetPerkRedeemCodesResponse {
  getPerkRedeemCodes?: {
    redeemCodes?: Array<IPerkRedeemCode>;
    success?: boolean;
    message?: string;
    purchaseableRedeemCodesCount?: number;
  };
}
export interface IPerkRedeemCodesResult {
  redeemCodes?: Array<IPerkRedeemCode>;
  success?: boolean;
  message?: string;
  purchaseableRedeemCodesCount?: number;
}
