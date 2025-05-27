import { RoleEnum } from '@app-enums/rolePermissionsEnum';
import { getPermissions } from '@app-utils/helpers/rolePermissionsHelpers';

/**
 * Permissions to exclude for admin.
 */
const permissionsToExcludeForAdmin = [
  'role',
  'permission',
  'forcedelete',
  'trashed',
  'transaction',
  'appsetting',
  'inappnotification',
  'restore',
  'addcoin',
  'removecoin',
  'admincoin',
];

/**
 * Permissions to exclude for manager.
 */
const permissionsToExcludeForManager = [
  ...permissionsToExcludeForAdmin,
  'user',
  'delete',
  'topuprequest',
  'withdrawrequest',
  'transfercoinsrequest',
];

/**
 * Permissions to exclude for editor.
 */
const permissionsToExcludeForEditor = [
  ...permissionsToExcludeForManager,
  'block',
];

/**
 * Permissions to exclude for creator.
 */
const permissionsToExcludeForCreator = [
  ...permissionsToExcludeForManager,
  'edit',
  'update',
  'review',
];

/**
 * Permissions to exclude for reviewer.
 */
const permissionsToExcludeForReviewer = [
  ...permissionsToExcludeForCreator?.filter((el) => el !== 'review'),
  'create',
  'add',
  'hide',
];

/**
 * Permissions to exclude for engager.
 */
const permissionsToExcludeForEngager = [
  ...permissionsToExcludeForManager,
  'review',
  'user',
  'hide',
];

/**
 * Permissions to include for engager.
 */
const permissionsToIncludeForEngager = ['createPrivateGameRoom'];

/**
 * Map of roles to their permissions.
 */
export const rolePermissionsMap: { [key in RoleEnum]: () => number[] } = {
  [RoleEnum.superAdmin]: () => getPermissions([]),
  [RoleEnum.admin]: () => getPermissions(permissionsToExcludeForAdmin),
  [RoleEnum.manager]: () => getPermissions(permissionsToExcludeForManager),
  [RoleEnum.editor]: () => getPermissions(permissionsToExcludeForEditor),
  [RoleEnum.creator]: () => getPermissions(permissionsToExcludeForCreator),
  [RoleEnum.reviewer]: () => getPermissions(permissionsToExcludeForReviewer),
  [RoleEnum.player]: () => [],
  [RoleEnum.engager]: () =>
    getPermissions(
      permissionsToExcludeForEngager,
      permissionsToIncludeForEngager
    ),
};
