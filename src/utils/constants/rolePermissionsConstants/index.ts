import { RoleEnum } from '@app-enums/rolePermissionsEnum';
import { getPermissions } from '@app-utils/helpers/rolePermissionsHelpers';

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
const permissionsToExcludeForManager = [
  ...permissionsToExcludeForAdmin,
  'user',
  'delete',
  'topuprequest',
  'withdrawrequest',
  'transfercoinsrequest',
];
const permissionsToExcludeForEditor = [
  ...permissionsToExcludeForManager,
  'block',
];
const permissionsToExcludeForCreator = [
  ...permissionsToExcludeForManager,
  'edit',
  'update',
  'review',
];
const permissionsToExcludeForReviewer = [
  ...permissionsToExcludeForCreator.filter((el) => el !== 'review'),
  'create',
  'add',
  'hide',
];
const permissionsToExcludeForEngager = [
  ...permissionsToExcludeForManager,
  'review',
  'user',
  'hide',
];
const permissionsToIncludeForEngager = ['createPrivateGameRoom'];

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
