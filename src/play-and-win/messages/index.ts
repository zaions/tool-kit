import { fieldsValidation } from '@utils/constants/generic';
import { appServiceFee } from '../constants';

export const ztkPlayWinMessages = (envs: any) => {
  return {
    validation: {
      selectMinimumOneOption: 'Select minimum one option.',
      phoneNumberLengthError:
        `Phone number must be ${fieldsValidation.generic.phoneNumber.max.val} digits.` satisfies 'Phone number must be 13 digits.' as 'Phone number must be 13 digits.',
      minReferralCodeError: 'Referral code must be at least 6 digits.',
      withdrawOptionsRequired: 'Withdraw options are required.',
      passwordNotMatchError: 'The password did not match.',
      confirmTextNotMatch: 'Confirm text does not match.',
      invalidReason: 'Please add a valid reason.',
      maxPlayersShouldBeGreaterOrEqualToMinPlayers:
        'Max players should be greater or equal to min players to start the game.',
      authCheckFailed: 'Check failed.',
      userAlreadyExists: 'User with this email or phone number already exists.',
      invalidCredential: 'Invalid credential.',
      nameRequired: 'Name is required.',
      descriptionRequired: 'Description is required.',
      invalidAmount: 'Invalid amount.',
      amountRequired: 'The amount is required.',
      amountMustBeGreaterThanOrEqualTo:
        `Amount must be greater than or equal to ${
          appServiceFee(envs)?.transfer?.minTransferAmountAllowed
        }` satisfies `Amount must be greater than or equal to ${number}` as `Amount must be greater than or equal to ${number}`,
      phoneNumberMustStartWithCode: 'Phone number must start with +92',
      notificationDescriptionLengthError:
        `Description must contain at most ${fieldsValidation.generic.description.short.max} character(s).` satisfies `Description must contain at most ${string} character(s).` as `Description must contain at most ${string} character(s).`,
    },

    game: {
      gameCreated: 'Game created successfully.',
      gameUpdated: 'Game updated successfully.',
      gameDeleted: 'Game deleted successfully.',
      gameNotFound: 'Game not found.',
      noGameIdProvided: 'No game ID provided!',
      gameRoomJoined: 'Successfully joined the game room.',
      gameRoomLeaved: 'Successfully left the game room.',
      gameRoomStarted: 'The game has started.',
      gameRoomReleased: 'The game has been released.',
    },

    request: {
      requestUpdated: 'Request updated successfully.',
      topupRequestSend:
        'Topup request sent successfully. Please wait for review.',
      topupRequestAdded: 'Topup request added successfully.',
      topupRequestUpdated: 'Topup request updated successfully.',
      topupVerifiedRequestSend:
        'Verification information sent successfully. Please wait for review.',
      withdrawRequestSend:
        'Withdraw request sent successfully. Please wait for review.',
    },

    transfer: {
      transferCoinSuccessfully: 'Transfer completed successfully.',
    },

    notification: {
      notificationSend: 'Notification sent successfully.',
      notificationUpdatedSuccessfully: 'Notification updated successfully.',
      notificationDeletedSuccessfully: 'Notification deleted successfully.',
      notificationNotFound: 'Notification not found.',
      selectUsersToSendNotification:
        'Please select users you want to send this notification to.',
    },

    network: {
      networkDisconnected: 'Network disconnected.',
    },
  } as const;
};
