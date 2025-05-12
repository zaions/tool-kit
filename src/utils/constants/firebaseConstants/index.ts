import {
  DBColumnKeysShortFormEnum,
  FrbOrderbyDirectionEnum,
} from '@app-enums/firebaseEnum';

/**
 * Constants for the default values for a collection query.
 */
export const frbCollectionQueryDefaults: {
  readonly limit: 100;
  readonly offset: 0;
  readonly orderBy: {
    readonly fieldKey: DBColumnKeysShortFormEnum.createdAt;
    readonly order: FrbOrderbyDirectionEnum.desc;
  };
} = {
  limit: 100,
  offset: 0,
  orderBy: {
    fieldKey: DBColumnKeysShortFormEnum.createdAt,
    order: FrbOrderbyDirectionEnum.desc,
  },
} as const;
