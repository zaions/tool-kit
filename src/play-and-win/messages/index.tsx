import { fieldsLength } from "../constants";

export const MESSAGES = {
  generic: {
    selectMinimumOneOption: "Select minimum one option",
    phoneNumberLengthError: `Phone number mush be ${fieldsLength.user?.phoneNumber} digits`,
    minReferralCodeError: "Referral code mush be minimum 6 digits",
    withdrawOptionsRequired: "Withdraw options are required.",
    passwordNotMatchError: "The password did not match",
  },
  errors: {
    authCheckFailed: "Check Failed",
    userAlreadyExists: "User with this email or phone number already exists",
    invalidCredential: "Invalid credential",
  },

  user: {
    nameRequired: "Name is Required.",
  },

  game: {
    createdSuccessfully: "Game created successfully.",
    updatedSuccessfully: "Game updated successfully.",
    deletedSuccessfully: "Game delete successfully.",
    notFount: "Game not found",
    noIdProvided: "No game id provided!",
  },

  gameRoom: {
    successfullyJoined: "Successfully joined the game room.",
    successfullyLeaved: "Successfully leaved the game room.",
    gameStarted: "The Game has been started.",
    releaseStarted: "The Game has been release.",
  },

  topup: {
    requestSendSuccessfully:
      "Topup Request send successfully. please wait for review.",
    requestAddSuccessfully: "Topup Request add successfully.",
    requestUpdatedSuccessfully: "Topup Request updated successfully.",
    verifiedRequestSendSuccessfully:
      "Verification information send successfully. please wait for review.",
  },

  request: {
    updatedSuccessfully: "Request updated successfully.",
  },

  withdraw: {
    requestSendSuccessfully:
      "withdraw Request send successfully. please wait for review.",
  },

  transferCoin: {
    transferSuccessfully: "Transfer coin successfully.",
  },

  network: {
    disconnected: "Network disconnected.",
  },

  notification: {
    sendSuccessfully: "Notification send successfully.",
    updatedSuccessfully: "Notification updated successfully.",
    deletedSuccessfully: "Notification deleted successfully.",
    notFound: "Notification not found.",
  },
} as const;
