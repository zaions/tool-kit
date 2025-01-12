import { PermissionCheckModeEnum } from '@enums/rolePermissionsEnum';

export interface IUseHasRequiredPermissions<T> {
  requiredPermissions?: Array<T>;
  excludedPermissions?: Array<T>;
  checkModeForRequiredPermissions?: PermissionCheckModeEnum;
  checkModeForExcludedPermissions?: PermissionCheckModeEnum;
}

export type UseHasRequiredPermissionCheckPermissionType<T> = (
  params: IUseHasRequiredPermissions<T>
) => boolean;

export interface IUseHasRequiredPermissionsReturn<T> {
  checkPermission: UseHasRequiredPermissionCheckPermissionType<T>;
  canAccess: boolean;
  userPermissions: Array<T>;
}

export interface IHasRequiredPermissions<T>
  extends IUseHasRequiredPermissions<T> {
  userPermissions: Array<T>;
}
