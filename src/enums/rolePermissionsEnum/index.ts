import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing different roles.
 */
export enum RoleEnum {
  superAdmin = 1,
  admin = 2,
  manager = 3,
  editor = 4,
  creator = 5,
  reviewer = 6,
  player = 7,
  engager = 8,
}

/**
 * Enum representing different permissions.
 */
export enum PermissionEnum {
  viewDashboard = 1,

  // profile privacy
  hideEarnings = 2, // don't show earnings on public profile page
  hideProfile = 3, // don't show profile in public search result

  listUsers = 4,
  viewUser = 5,
  createUser = 6,
  updateUser = 7,
  deleteUser = 8,
  forceDeleteUser = 9,
  blockUser = 10,
  unBlockUser = 11,
  updateUserBalance = 12,
  viewTrashedUsers = 13,
  viewTrashedUser = 14,

  listGames = 15,
  viewGame = 16,
  createGame = 17,
  updateGame = 18,
  deleteGame = 19,
  forceDeleteGame = 20,
  blockGame = 21,
  unBlockGame = 22,
  viewTrashedGames = 23,
  viewTrashedGame = 24,

  listGameRooms = 25,
  viewGameRoom = 26,
  createGameRoom = 27,
  updateGameRoom = 28,
  deleteGameRoom = 29,
  forceDeleteGameRoom = 30,
  blockGameRoom = 31,
  unBlockGameRoom = 32,
  createPrivateGameRoom = 33, // don't show the room in available game rooms search page
  viewTrashedGameRooms = 34,
  viewTrashedGameRoom = 35,

  // for both frontend players and backend admin level users
  listTopupRequests = 36,
  viewTopupRequest = 37,
  createTopupRequest = 38,
  updateTopupRequest = 39, // update the transaction screenshot and also for cancel topup request
  deleteTopupRequest = 40,
  forceDeleteTopupRequest = 41,
  reviewTopupRequest = 42,
  viewTrashedTopupRequests = 43,
  viewTrashedTopupRequest = 44,

  // withdrawRequests // for backend admin level user
  listWithdrawRequests = 45,
  viewWithdrawRequest = 46,
  createWithdrawRequest = 47,
  updateWithdrawRequest = 48,
  deleteWithdrawRequest = 49,
  forceDeleteWithdrawRequest = 50,
  reviewWithdrawRequest = 51,
  viewTrashedWithdrawRequests = 52,
  viewTrashedWithdrawRequest = 53,

  // User Role & Permissions
  listRoles = 54,
  viewRole = 55,
  createRole = 56,
  updateRole = 57,
  deleteRole = 58,
  forceDeleteRole = 59,
  reviewRole = 60,
  viewTrashedRoles = 61,
  viewTrashedRole = 62,
  attachRole = 63,
  removeRole = 64,
  addListPermissionsToRole = 65,
  addViewPermissionsToRole = 66,
  addCreatePermissionsToRole = 67,
  addUpdatePermissionsToRole = 68,
  addForceDeletePermissionsToRole = 69,
  addListTrashedPermissionsToRole = 70,
  addViewTrashedPermissionsToRole = 71,
  addReviewPermissionsToRole = 72,
  addOtherPermissionsToRole = 73,

  // Coins Transfer History
  listTransferCoinsRequests = 74,
  viewTransferCoinsRequest = 75, // admin can not make any changes to transfer coins request

  // InApp Notifications
  listInAppNotifications = 76,
  viewInAppNotification = 77,
  createInAppNotification = 78,
  updateInAppNotification = 79,
  deleteInAppNotification = 80,
  forceDeleteInAppNotification = 81,
  viewTrashedInAppNotifications = 82,
  viewTrashedInAppNotification = 83,
  sendInAppNotificationToAllPlayers = 84,
  sendInAppNotificationToAllAdminLevelUsers = 85,
  sendInAppNotificationToSpecificPlayers = 86,
  sendInAppNotificationToSpecificAdminLevelUsers = 87,
  scheduleInAppNotifications = 88,

  listAttachments = 89,
  viewAttachment = 90,
  createAttachment = 91,
  updateAttachment = 92,
  deleteAttachment = 93,
  forceDeleteAttachment = 94,
  viewTrashedAttachments = 95,
  viewTrashedAttachment = 96,

  listAppSettings = 97,
  viewAppSetting = 98,
  createAppSetting = 99,
  updateAppSetting = 100,
  deleteAppSetting = 101,
  forceDeleteAppSetting = 102,
  viewTrashedAppSettings = 103,
  viewTrashedAppSetting = 104,

  listTransactions = 105,
  viewTransaction = 106,
  createTransaction = 107,
  updateTransaction = 108,
  deleteTransaction = 109,
  forceDeleteTransaction = 110,
  viewTrashedTransactions = 111,
  viewTrashedTransaction = 112,

  listPlaces = 113,
  viewPlace = 114,
  createPlace = 115,
  updatePlace = 116,
  deletePlace = 117,
  forceDeletePlace = 118,
  viewTrashedPlaces = 119,
  viewTrashedPlace = 120,
  restoreTrashedPlace = 121,
  blockPlace = 122,
  unBlockPlace = 123,

  restoreTrashedUser = 124,

  restoreTrashedGame = 125,

  restoreTrashedGameRoom = 126,

  restoreTrashedTopupRequest = 127,

  restoreTrashedWithdrawRequest = 128,

  restoreTrashedRole = 129,

  restoreTrashedInAppNotification = 130,

  restoreTrashedAttachment = 131,

  restoreTrashedAppSetting = 132,

  restoreTrashedTransaction = 133,

  addCoinsToUserAccount = 134,
  removeCoinsFromUserAccount = 135,
  listAdminCoinsUpdateLogs = 136,
  viewAdminCoinsUpdateLog = 137,

  listUserDetails = 138,
  viewUserDetail = 139,
  createUserDetail = 140,
  updateUserDetail = 141,
  deleteUserDetail = 142,
  forceDeleteUserDetail = 143,
  viewTrashedUserDetails = 144,
  viewTrashedUserDetail = 145,
}

/**
 * Enum representing different user roles.
 */
export enum _UserRoleEnum {
  superAdmin = '197g24g-28h3v2g9g972g3f',
  admin = '28h3v2g9g9--72g3f',
  manager = '38h3vrv3-ion2g9g97-2g3f',
  editor = '48h3v2g9g97-2g3f',
  creator = '58h3v2g9g8h-972g3f',
  reviewer = '68h-3v2g9g972g3f',
  player = '78h3v2g9-g972g3f',
  engager = '8hfrfr----8h3v2g9-g972g3f',
}

/**
 * Enum representing different permission types.
 */
export enum PermissionTypeEnum {
  viewTrashedItem = 1,
  viewTrashedItems = 2,
  viewBlockedItem = 3,
}

/**
 * Enum representing different permission check modes.
 */
export enum PermissionCheckModeEnum {
  every = 1, // user must have every permissions that have passed.
  any = 2, // user must have any permissions that have passed.
}

/**
 * Check for duplicate values in the RoleEnum.
 */
checkForDuplicateEnumValues(RoleEnum, 'Duplicate RoleEnum value found:');

/**
 * Check for duplicate values in the PermissionCheckModeEnum.
 */
checkForDuplicateEnumValues(
  PermissionCheckModeEnum,
  'Duplicate PermissionCheckModeEnum value found:'
);

/**
 * Check for duplicate values in the PermissionEnum.
 */
checkForDuplicateEnumValues(
  PermissionEnum,
  'Duplicate PermissionEnum value found:'
);

/**
 * Check for duplicate values in the _UserRoleEnum.
 */
checkForDuplicateEnumValues(
  _UserRoleEnum,
  'Duplicate _UserRoleEnum value found:'
);

/**
 * Check for duplicate values in the PermissionTypeEnum.
 */
checkForDuplicateEnumValues(
  PermissionTypeEnum,
  'Duplicate PermissionTypeEnum value found:'
);
