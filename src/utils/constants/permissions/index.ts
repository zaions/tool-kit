import { PermissionEnum } from '@enums/rolePermissionsEnum';

export const permissionsData: {
  value: PermissionEnum;
  label: string;
}[] = [
  { value: PermissionEnum.viewDashboard, label: 'View dashboard' },

  // Profile privacy
  { value: PermissionEnum.hideEarnings, label: 'Hide earnings' },
  { value: PermissionEnum.hideProfile, label: 'Hide profile' },

  // User management
  { value: PermissionEnum.listUsers, label: 'List users' },
  { value: PermissionEnum.viewUser, label: 'View user' },
  { value: PermissionEnum.createUser, label: 'Create user' },
  { value: PermissionEnum.updateUser, label: 'Update user' },
  { value: PermissionEnum.deleteUser, label: 'Delete user' },
  { value: PermissionEnum.forceDeleteUser, label: 'Force delete user' },
  { value: PermissionEnum.blockUser, label: 'Block user' },
  { value: PermissionEnum.unBlockUser, label: 'Unblock user' },
  { value: PermissionEnum.updateUserBalance, label: 'Update user balance' },
  { value: PermissionEnum.viewTrashedUsers, label: 'View trashed users' },
  { value: PermissionEnum.viewTrashedUser, label: 'View trashed user' },

  // Game management
  { value: PermissionEnum.listGames, label: 'List games' },
  { value: PermissionEnum.viewGame, label: 'View game' },
  { value: PermissionEnum.createGame, label: 'Create game' },
  { value: PermissionEnum.updateGame, label: 'Update game' },
  { value: PermissionEnum.deleteGame, label: 'Delete game' },
  { value: PermissionEnum.forceDeleteGame, label: 'Force delete game' },
  { value: PermissionEnum.blockGame, label: 'Block game' },
  { value: PermissionEnum.unBlockGame, label: 'Unblock game' },
  { value: PermissionEnum.viewTrashedGames, label: 'View trashed games' },
  { value: PermissionEnum.viewTrashedGame, label: 'View trashed game' },

  // Game room management
  { value: PermissionEnum.listGameRooms, label: 'List game rooms' },
  { value: PermissionEnum.viewGameRoom, label: 'View game room' },
  { value: PermissionEnum.createGameRoom, label: 'Create game room' },
  { value: PermissionEnum.updateGameRoom, label: 'Update game room' },
  { value: PermissionEnum.deleteGameRoom, label: 'Delete game room' },
  {
    value: PermissionEnum.forceDeleteGameRoom,
    label: 'Force delete game room',
  },
  { value: PermissionEnum.blockGameRoom, label: 'Block game room' },
  { value: PermissionEnum.unBlockGameRoom, label: 'Unblock game room' },
  {
    value: PermissionEnum.createPrivateGameRoom,
    label: 'Create private game room',
  },
  {
    value: PermissionEnum.viewTrashedGameRooms,
    label: 'View trashed game rooms',
  },
  {
    value: PermissionEnum.viewTrashedGameRoom,
    label: 'View trashed game room',
  },

  // Top-up requests
  { value: PermissionEnum.listTopupRequests, label: 'List top-up requests' },
  { value: PermissionEnum.viewTopupRequest, label: 'View top-up request' },
  { value: PermissionEnum.createTopupRequest, label: 'Create top-up request' },
  { value: PermissionEnum.updateTopupRequest, label: 'Update top-up request' },
  { value: PermissionEnum.deleteTopupRequest, label: 'Delete top-up request' },
  {
    value: PermissionEnum.forceDeleteTopupRequest,
    label: 'Force delete top-up request',
  },
  { value: PermissionEnum.reviewTopupRequest, label: 'Review top-up request' },
  {
    value: PermissionEnum.viewTrashedTopupRequests,
    label: 'View trashed top-up requests',
  },
  {
    value: PermissionEnum.viewTrashedTopupRequest,
    label: 'View trashed top-up request',
  },

  // Withdraw requests
  {
    value: PermissionEnum.listWithdrawRequests,
    label: 'List withdraw requests',
  },
  { value: PermissionEnum.viewWithdrawRequest, label: 'View withdraw request' },
  {
    value: PermissionEnum.createWithdrawRequest,
    label: 'Create withdraw request',
  },
  {
    value: PermissionEnum.updateWithdrawRequest,
    label: 'Update withdraw request',
  },
  {
    value: PermissionEnum.deleteWithdrawRequest,
    label: 'Delete withdraw request',
  },
  {
    value: PermissionEnum.forceDeleteWithdrawRequest,
    label: 'Force delete withdraw request',
  },
  {
    value: PermissionEnum.reviewWithdrawRequest,
    label: 'Review withdraw request',
  },
  {
    value: PermissionEnum.viewTrashedWithdrawRequests,
    label: 'View trashed withdraw requests',
  },
  {
    value: PermissionEnum.viewTrashedWithdrawRequest,
    label: 'View trashed withdraw request',
  },

  // User roles and permissions
  { value: PermissionEnum.listRoles, label: 'List roles' },
  { value: PermissionEnum.viewRole, label: 'View role' },
  { value: PermissionEnum.createRole, label: 'Create role' },
  { value: PermissionEnum.updateRole, label: 'Update role' },
  { value: PermissionEnum.deleteRole, label: 'Delete role' },
  { value: PermissionEnum.forceDeleteRole, label: 'Force delete role' },
  { value: PermissionEnum.reviewRole, label: 'Review role' },
  { value: PermissionEnum.viewTrashedRoles, label: 'View trashed roles' },
  { value: PermissionEnum.viewTrashedRole, label: 'View trashed role' },
  { value: PermissionEnum.attachRole, label: 'Attach role' },
  { value: PermissionEnum.removeRole, label: 'Remove role' },
  {
    value: PermissionEnum.addListPermissionsToRole,
    label: 'Add list permissions to role',
  },
  {
    value: PermissionEnum.addViewPermissionsToRole,
    label: 'Add view permissions to role',
  },
  {
    value: PermissionEnum.addCreatePermissionsToRole,
    label: 'Add create permissions to role',
  },
  {
    value: PermissionEnum.addUpdatePermissionsToRole,
    label: 'Add update permissions to role',
  },
  {
    value: PermissionEnum.addForceDeletePermissionsToRole,
    label: 'Add force delete permissions to role',
  },
  {
    value: PermissionEnum.addListTrashedPermissionsToRole,
    label: 'Add list trashed permissions to role',
  },
  {
    value: PermissionEnum.addViewTrashedPermissionsToRole,
    label: 'Add view trashed permissions to role',
  },
  {
    value: PermissionEnum.addReviewPermissionsToRole,
    label: 'Add review permissions to role',
  },
  {
    value: PermissionEnum.addOtherPermissionsToRole,
    label: 'Add other permissions to role',
  },

  // Coins transfer history
  {
    value: PermissionEnum.listTransferCoinsRequests,
    label: 'List transfer coins requests',
  },
  {
    value: PermissionEnum.viewTransferCoinsRequest,
    label: 'View transfer coins request',
  },

  // In-app notifications
  {
    value: PermissionEnum.listInAppNotifications,
    label: 'List in-app notifications',
  },
  {
    value: PermissionEnum.viewInAppNotification,
    label: 'View in-app notification',
  },
  {
    value: PermissionEnum.createInAppNotification,
    label: 'Create in-app notification',
  },
  {
    value: PermissionEnum.updateInAppNotification,
    label: 'Update in-app notification',
  },
  {
    value: PermissionEnum.deleteInAppNotification,
    label: 'Delete in-app notification',
  },
  {
    value: PermissionEnum.forceDeleteInAppNotification,
    label: 'Force delete in-app notification',
  },
  {
    value: PermissionEnum.viewTrashedInAppNotifications,
    label: 'View trashed in-app notifications',
  },
  {
    value: PermissionEnum.viewTrashedInAppNotification,
    label: 'View trashed in-app notification',
  },
  {
    value: PermissionEnum.sendInAppNotificationToAllPlayers,
    label: 'Send in-app notification to all players',
  },
  {
    value: PermissionEnum.sendInAppNotificationToAllAdminLevelUsers,
    label: 'Send in-app notification to all admin users',
  },
  {
    value: PermissionEnum.sendInAppNotificationToSpecificPlayers,
    label: 'Send in-app notification to specific players',
  },
  {
    value: PermissionEnum.sendInAppNotificationToSpecificAdminLevelUsers,
    label: 'Send in-app notification to specific admin users',
  },
  {
    value: PermissionEnum.scheduleInAppNotifications,
    label: 'Schedule in-app notifications',
  },

  // Attachments
  { value: PermissionEnum.listAttachments, label: 'List attachments' },
  { value: PermissionEnum.viewAttachment, label: 'View attachment' },
  { value: PermissionEnum.createAttachment, label: 'Create attachment' },
  { value: PermissionEnum.updateAttachment, label: 'Update attachment' },
  { value: PermissionEnum.deleteAttachment, label: 'Delete attachment' },
  {
    value: PermissionEnum.forceDeleteAttachment,
    label: 'Force delete attachment',
  },
  {
    value: PermissionEnum.viewTrashedAttachments,
    label: 'View trashed attachments',
  },
  {
    value: PermissionEnum.viewTrashedAttachment,
    label: 'View trashed attachment',
  },

  // App settings
  { value: PermissionEnum.listAppSettings, label: 'List app settings' },
  { value: PermissionEnum.viewAppSetting, label: 'View app setting' },
  { value: PermissionEnum.createAppSetting, label: 'Create app setting' },
  { value: PermissionEnum.updateAppSetting, label: 'Update app setting' },
  { value: PermissionEnum.deleteAppSetting, label: 'Delete app setting' },
  {
    value: PermissionEnum.forceDeleteAppSetting,
    label: 'Force delete app setting',
  },
  {
    value: PermissionEnum.viewTrashedAppSettings,
    label: 'View trashed app settings',
  },
  {
    value: PermissionEnum.viewTrashedAppSetting,
    label: 'View trashed app setting',
  },

  // Transactions
  { value: PermissionEnum.listTransactions, label: 'List transactions' },
  { value: PermissionEnum.viewTransaction, label: 'View transaction' },
  { value: PermissionEnum.createTransaction, label: 'Create transaction' },
  { value: PermissionEnum.updateTransaction, label: 'Update transaction' },
  { value: PermissionEnum.deleteTransaction, label: 'Delete transaction' },
  {
    value: PermissionEnum.forceDeleteTransaction,
    label: 'Force delete transaction',
  },
  {
    value: PermissionEnum.viewTrashedTransactions,
    label: 'View trashed transactions',
  },
  {
    value: PermissionEnum.viewTrashedTransaction,
    label: 'View trashed transaction',
  },
];
