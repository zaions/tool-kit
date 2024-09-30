import { BalanceUpdateTypeEnum } from "../enums";

export const appServiceFee = (envs: any) => {
  return {
    gameRoom: {
      leaveFee: {
        amount: 0, // right now not subtracting anything when user leaves a room
        type: BalanceUpdateTypeEnum.exact,
      },
    },
    topup: {
      minTopupAmountAllowed: envs.isDevelopment ? 1 : 100, // this affects the requestTopup api request validation
    },
    withdraw: {
      minWithdrawAmountAllowed: envs.isDevelopment ? 1 : 1000, // this affects the createWithdrawRequest api request validation
    },
    transfer: {
      minTransferAmountAllowed: envs.isDevelopment ? 1 : 100, // this affects the createWithdrawRequest api request validation
    },
  };
};

export const fieldsLength = {
  textarea: 500,
  input: 225,
  verificationCode: 6,
  user: {
    phoneNumber: 13,
  },
  gameRoom: {
    code: 8,
  },
  transfer: {
    maxPlayerPhoneNumber: 100,
    minPlayerPhoneNumber: 13,
  },
  notification: {
    description: 100,
  },
};

export const timeLimits = {
  engagerStartTime: 15, // default 15 Minutes
  playerJoinTime: 5, // default 5 Minutes
};
