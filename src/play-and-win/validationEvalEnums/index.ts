import { CoinManagementActionEnum } from '../enums';

export const coinManagementActionVal: readonly [
  CoinManagementActionEnum.add,
  CoinManagementActionEnum.remove,
] = [CoinManagementActionEnum.add, CoinManagementActionEnum.remove] as const;
