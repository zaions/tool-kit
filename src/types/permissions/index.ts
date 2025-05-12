import { PermissionCheckModeEnum } from '@app-enums/rolePermissionsEnum';

/**
 * Type representing the parameters for the useHasRequiredPermissions hook.
 */
export interface IUseHasRequiredPermissions<T> {
  requiredPermissions?: Array<T>;
  excludedPermissions?: Array<T>;
  checkModeForRequiredPermissions?: PermissionCheckModeEnum;
  checkModeForExcludedPermissions?: PermissionCheckModeEnum;
}

/**
 * Type representing the function for the useHasRequiredPermissions hook.
 */
export type UseHasRequiredPermissionCheckPermissionType<T> = (
  params: IUseHasRequiredPermissions<T>
) => boolean;

/**
 * Type representing the return value for the useHasRequiredPermissions hook.
 */
export interface IUseHasRequiredPermissionsReturn<T> {
  checkPermission: UseHasRequiredPermissionCheckPermissionType<T>;
  canAccess: boolean;
  userPermissions: Array<T>;
}

/**
 * Type representing the parameters for the hasRequiredPermissions function.
 */
export interface IHasRequiredPermissions<T>
  extends IUseHasRequiredPermissions<T> {
  userPermissions: Array<T>;
}
