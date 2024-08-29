import {
	DBColumnKeysShortFormEnum,
	FrbOrderbyDirectionEnum,
} from '@enums/firebaseEnum';

export const frbCollectionQueryDefaults = {
	limit: 100,
	offset: 0,
	orderBy: {
		fieldKey: DBColumnKeysShortFormEnum.createdAt,
		order: FrbOrderbyDirectionEnum.desc,
	},
} as const;
