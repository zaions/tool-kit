import { BalanceUpdateTypeEnum } from '../enums';

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

export const playAndWinFieldsValidation = {
  transfer: {
    maxPlayerPhoneNumber: 100,
    minPlayerPhoneNumber: 13,
  },
};

export const timeLimits = {
  engagerStartTime: 15, // default 15 Minutes
  playerJoinTime: 5, // default 5 Minutes
};

export const playAndWinAppTerms = {
  user: {
    camelCase: 'Users',
    smallerCase: 'users',
    upperCase: 'USERS',
    singularCamelCase: 'User',
    singularSmallerCase: 'user',
    singularUpperCase: 'USER',
  },
  engager: {
    camelCase: 'Engagers',
    smallerCase: 'engagers',
    upperCase: 'ENGAGERS',
    singularCamelCase: 'Engager',
    singularSmallerCase: 'engager',
    singularUpperCase: 'ENGAGER',
  },
  player: {
    camelCase: 'Players',
    smallerCase: 'players',
    upperCase: 'PLAYERS',
    singularCamelCase: 'Player',
    singularSmallerCase: 'player',
    singularUpperCase: 'PLAYER',
  },
  topup: {
    camelCase: 'Coins',
    smallerCase: 'coins',
    upperCase: 'COINS',
    singularCamelCase: 'Coin',
    singularSmallerCase: 'coin',
    singularUpperCase: 'COIN',
  },
  withdraw: {
    camelCase: 'Send Gift Coins',
    smallerCase: 'send gift coins',
    upperCase: 'SEND GIFT COINS',
    singularCamelCase: 'Send Gift Coin',
    singularSmallerCase: 'send gift coin',
    singularUpperCase: 'SEND GIFT COIN',
  },
  transferCoin: {
    camelCase: 'Gift Coins To Players',
    smallerCase: 'gift coins to players',
    upperCase: 'GIFT COINS TO PLAYERS',
    singularCamelCase: 'Gift Coins To Player',
    singularSmallerCase: 'gift coins to player',
    singularUpperCase: 'GIFT COINS TO PLAYER',
  },
  gameRoom: {
    camelCase: 'Game Rooms',
    smallerCase: 'game rooms',
    upperCase: 'GAME ROOMS',
    singularCamelCase: 'Game Room',
    singularSmallerCase: 'game room',
    singularUpperCase: 'GAME ROOM',
  },
  game: {
    camelCase: 'Games',
    smallerCase: 'games',
    upperCase: 'GAMES',
    singularCamelCase: 'Game',
    singularSmallerCase: 'game',
    singularUpperCase: 'GAME',
  },
  role: {
    camelCase: 'Roles',
    smallerCase: 'roles',
    upperCase: 'ROLES',
    singularCamelCase: 'Role',
    singularSmallerCase: 'role',
    singularUpperCase: 'ROLE',
  },
  permission: {
    camelCase: 'Permissions',
    smallerCase: 'permissions',
    upperCase: 'PERMISSIONS',
    singularCamelCase: 'Permission',
    singularSmallerCase: 'permission',
    singularUpperCase: 'PERMISSION',
  },
  coinManagement: {
    camelCase: 'Coin Managements',
    smallerCase: 'coin managements',
    upperCase: 'COIN MANAGEMENTS',
    singularCamelCase: 'Coin Management',
    singularSmallerCase: 'coin management',
    singularUpperCase: 'COIN MANAGEMENT',
  },
  amount: {
    camelCase: 'No. of Coins',
    smallerCase: 'no. of coins',
    upperCase: 'NO. OF COINS',
    singularCamelCase: 'No. of Coin',
    singularSmallerCase: 'no. of coin',
    singularUpperCase: 'NO. OF COIN',
    column: 'No. of Coins', // of table head column if for any reason need to change it specifically
    inBetween: 'no. of coins', // of in between text or paragraph if for any reason need to change it specifically
  },
} as const;
