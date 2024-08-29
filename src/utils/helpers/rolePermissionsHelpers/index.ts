import {
	PermissionEnum,
	RoleEnum,
	_UserRoleEnum,
} from '@enums/rolePermissionsEnum';

// we can not add toLowerCase here, otherwise we will not be able to get any permission afterworlds
const permissionsStrings = Object.keys(PermissionEnum).filter((key) =>
	isNaN(Number(key))
);

export const getPermissions = (
	excludes: string[] = [],
	include: string[] = []
) => {
	const _excludes = excludes.map((el) => el.toLowerCase());
	const _include = include.map((el) => el.toLowerCase());

	return permissionsStrings
		.filter((key) => {
			const _key = key.toLowerCase();

			if (_include.length > 0 && _include.includes(_key)) {
				return true;
			}

			return !_excludes.some((exclude) => {
				return _key.includes(exclude);
			});
		})
		.map((key) => PermissionEnum[key as keyof typeof PermissionEnum]);
};

export const getUserRoleEnumValueFromString = (_userRole: string) => {
	switch (_userRole) {
		case _UserRoleEnum.superAdmin:
			return RoleEnum.superAdmin;
		case _UserRoleEnum.admin:
			return RoleEnum.admin;
		case _UserRoleEnum.manager:
			return RoleEnum.manager;
		case _UserRoleEnum.editor:
			return RoleEnum.editor;
		case _UserRoleEnum.creator:
			return RoleEnum.creator;
		case _UserRoleEnum.reviewer:
			return RoleEnum.reviewer;
		case _UserRoleEnum.engager:
			return RoleEnum.engager;
		default:
			return RoleEnum.player;
	}
};

export const mapPermissionsToStrings = (permissions: number[]): string[] => {
	// Use a Set to filter out non-unique values and ensure all values are greater than 0
	const uniquePermissions = Array.from(new Set(permissions)).filter(
		(permission) => permission > 0
	);

	// Map the filtered permissions to their string values
	return uniquePermissions.map((permission) => PermissionEnum[permission]);
};
