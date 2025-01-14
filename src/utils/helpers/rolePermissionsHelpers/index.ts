import {
  PermissionCheckModeEnum,
  PermissionEnum,
  RoleEnum,
  _UserRoleEnum,
} from '@app-enums/rolePermissionsEnum';
import { IHasRequiredPermissions } from '@app-types/permissions/index';

// we can not add toLowerCase here, otherwise we will not be able to get any permission afterworlds
const permissionsStrings = Object.keys(PermissionEnum).filter((key) =>
  isNaN(Number(key))
);

export const getPermissions = (
  excludes: string[] = [],
  include: string[] = []
): PermissionEnum[] => {
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

export const getUserRoleEnumValueFromString = (_userRole: string): RoleEnum => {
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

// Check if the user has a specific permission
export const hasPermission = <T>({
  permission,
  userPermissions,
}: {
  userPermissions: T[];
  permission: T;
}): boolean => userPermissions?.includes(permission);

/**
 * Checks if a user has the required permissions based on the specified check mode.
 *
 * @template T - The type of the permission (enum).
 * @param {Object} params - The parameters for the permission check.
 * @param {Array<T>} params.userPermissions - The list of permissions the user has.
 * @param {Array<T>} [params.requiredPermissions=[]] - The list of permissions required for the action.
 * @param {PermissionCheckModeEnum} [params.checkModeForRequiredPermissions=PermissionCheckModeEnum.every] -
 * The mode for checking required permissions:
 * - `PermissionCheckModeEnum.every`: Requires the user to have **all** the permissions.
 * - `PermissionCheckModeEnum.any`: Requires the user to have **at least one** of the permissions.
 * @returns {boolean} - Returns `true` if the user meets the required permissions; otherwise, `false`.
 */
export const validateRequiredPermissions = <T>({
  userPermissions,
  requiredPermissions = [],
  checkModeForRequiredPermissions = PermissionCheckModeEnum.every,
}: {
  userPermissions: Array<T>;
  requiredPermissions?: Array<T>;
  checkModeForRequiredPermissions?: PermissionCheckModeEnum;
}): boolean => {
  if (!requiredPermissions || requiredPermissions?.length === 0) {
    return true;
  }
  return checkModeForRequiredPermissions === PermissionCheckModeEnum.every
    ? requiredPermissions.every((permission) =>
        hasPermission({ userPermissions, permission })
      )
    : requiredPermissions.some((permission) =>
        hasPermission({ userPermissions, permission })
      );
};

/**
 * Checks if a user has excluded permissions that would prevent an action or hide a component.
 *
 * @template T - The type of the permission (enum).
 * @param {Object} params - The parameters for the exclusion check.
 * @param {Array<T>} params.userPermissions - The list of permissions the user has.
 * @param {Array<T>} [params.excludedPermissions=[]] - The list of permissions that should not be present.
 * @param {PermissionCheckModeEnum} [params.checkModeForExcludedPermissions=PermissionCheckModeEnum.every] -
 * The mode for checking excluded permissions:
 * - `PermissionCheckModeEnum.every`: Requires the user to have **all** of the excluded permissions.
 * - `PermissionCheckModeEnum.any`: Requires the user to have **at least one** of the excluded permissions.
 * @returns {boolean} - Returns `true` if the user lacks the excluded permissions; otherwise, `false`.
 */
export const validateExcludedPermissions = <T>({
  userPermissions,
  excludedPermissions = [], // to check for permissions that, if present, will hide the component
  checkModeForExcludedPermissions = PermissionCheckModeEnum.every,
}: {
  userPermissions: Array<T>;
  excludedPermissions?: Array<T>;
  checkModeForExcludedPermissions?: PermissionCheckModeEnum;
}): boolean => {
  if (!excludedPermissions || excludedPermissions?.length === 0) {
    return true;
  }
  return !(checkModeForExcludedPermissions === PermissionCheckModeEnum.every
    ? excludedPermissions.every((permission) =>
        hasPermission({ userPermissions, permission })
      )
    : excludedPermissions.some((permission) =>
        hasPermission({ userPermissions, permission })
      ));
};

/**
 * Determines whether a user meets the required and excluded permission checks.
 *
 * @template T - The type of the permission (e.g., a string, enum, etc.).
 * @param {Object} params - The parameters for the permission validation.
 * @param {Array<T>} params.userPermissions - The list of permissions the user has.
 * @param {Array<T>} [params.requiredPermissions=[]] - The list of required permissions.
 * @param {Array<T>} [params.excludedPermissions=[]] - The list of permissions that should not be present.
 * @param {PermissionCheckModeEnum} [params.checkModeForRequiredPermissions=PermissionCheckModeEnum.every] -
 * The mode for checking required permissions:
 * - `PermissionCheckModeEnum.every`: Requires **all** required permissions.
 * - `PermissionCheckModeEnum.any`: Requires **at least one** required permission.
 * @param {PermissionCheckModeEnum} [params.checkModeForExcludedPermissions=PermissionCheckModeEnum.every] -
 * The mode for checking excluded permissions:
 * - `PermissionCheckModeEnum.every`: Requires **all** excluded permissions.
 * - `PermissionCheckModeEnum.any`: Requires **at least one** excluded permission.
 * @returns {boolean} - Returns `true` if the user meets the required and excluded permission checks; otherwise, `false`.
 */
export const validateUserPermissions = <T>({
  userPermissions,
  requiredPermissions = [],
  excludedPermissions = [], // to check for permissions that, if present, will hide the component
  checkModeForRequiredPermissions = PermissionCheckModeEnum.every,
  checkModeForExcludedPermissions = PermissionCheckModeEnum.every,
}: IHasRequiredPermissions<T>): boolean => {
  if (
    validateRequiredPermissions({
      userPermissions,
      checkModeForRequiredPermissions,
      requiredPermissions,
    }) &&
    validateExcludedPermissions({
      userPermissions,
      excludedPermissions,
      checkModeForExcludedPermissions,
    })
  ) {
    return true;
  }

  return false;
};
