export enum BalanceUpdateActionEnum {
  add = 1,
  subtract = 2,
}
export enum BalanceUpdateTypeEnum {
  exact = 1,
  percentage = 2,
}

export enum PlayerBalanceUpdateRequestTypeEnum {
  topup = 1,
  withdraw = 2,
  transferred = 3,
  received = 4,
  wonGameRoomPoolPrice = 5,
  gameRoomFeeReturnedAfterReleased = 6,
  lostGameRoom = 7,
  coinsAddedByAdmin = 8,
  coinsRemovedByAdmin = 9,
}

export enum InAppNotificationSendToEnum {
  allUsers = 1,
  allAdmins = 2,
  allEngagers = 3,
  allPlayers = 4,
  allEngagersAndPlayers = 5,
  specificUsers = 6,
}

export enum InAppNotificationStatusEnum {
  sent = 1,
  pending = 2,
  draft = 3,
}

export enum GameRoomStatusEnum {
  waitingForPlayers = 1,
  inProgress = 2,
  waitingForResult = 3,
  completed = 4,
  waitingForEngager = 5, // once required players have entered the room and are waiting for the engager, to start the game
  released = 6, // when the required players were not able to join the game room in time and engager released the game room
}

export enum WithdrawRequestStatusEnum {
  processing = 1,
  completed = 2,
  rejected = 3,
  cancelled = 4,
}

export enum TopupStatusEnum {
  paymentVerificationRequired = 1,
  waitingForReview = 2,
  completed = 3,
  rejected = 4,
  cancelled = 5,
}

export enum TransactionTypeEnum {
  topup = 1,
  withdraw = 2,
  transfer = 3,
  received = 4,
  wonGameRoomPoolPrice = 5,
  gameRoomFeeReturnedAfterReleased = 6,
  lostGameRoom = 7,
  coinsAddedByAdmin = 8,
  coinsRemovedByAdmin = 9,
}
