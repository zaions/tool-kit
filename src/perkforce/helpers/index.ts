import { allowedImageTypes, svgIconTypes } from '@utils/constants/generic';
import { getObjectKey, isArray, isObject } from '@utils/helpers/generic';
import { INTEGRATION_STATE, USER_TYPE } from '../enums';
import { IInvite } from '../types/queryMutationTypes/invites';
import { IUser } from '../types/queryMutationTypes/user';

export const customRequest = ({
  file,
  onSuccess,
}: {
  file?: any;
  onSuccess?: (body: any, xhr?: XMLHttpRequest) => void;
}): void => {
  setTimeout(() => {
    onSuccess && onSuccess('ok');
  }, 0);
};

export const getSortOrderByField = (field: string, obj: any): any => {
  return isObject(obj) && obj.field === field && obj.order;
};

export const setFilters = (
  filter: Record<string, unknown>
): Record<string, unknown> => {
  if (!isObject(filter)) return {};

  const result: Record<string, unknown> = {};

  for (const key in filter) {
    result.field = key;
    result.values = filter[key];
  }

  return isArray(result.values) ? result : {};
};

export const getActiveFilters = (
  field: string,
  filter: Record<string, unknown>
): unknown => {
  if (isObject(filter) && filter.field === field) {
    return filter.values;
  }

  return [];
};

export const showPause = (
  invite?: IInvite,
  user?: IUser
): boolean | undefined => {
  if (!isObject(invite) || !isObject(user)) return;

  if (user?.type === USER_TYPE.employee) {
    if (
      (invite?.toPaused && user?.employerId?._id === invite?.to?._id) ||
      (invite?.fromPaused && invite?.from?._id === user?.employerId?._id)
    ) {
      return false;
    }
  }

  // if receiver paused it
  if (invite?.toPaused) {
    // and current user is the receiver
    if (invite?.to?._id === user?._id) {
      // do not show pause action
      return false;
    }
  }

  // if sender paused it
  if (invite?.fromPaused) {
    // and current user is the sender
    if (invite?.from?._id === user?._id) {
      // do not show pause action
      return false;
    }
  }

  // show pause action
  return true;
};

export const showResume = (
  invite?: IInvite,
  user?: IUser
): boolean | undefined => {
  if (!isObject(invite) || !isObject(user)) return;

  if (user?.type === USER_TYPE.employee) {
    if (
      (invite?.toPaused && user?.employerId?._id === invite?.to?._id) ||
      (invite?.fromPaused && invite?.from?._id === user?.employerId?._id)
    ) {
      return true;
    }
  } else {
    if (
      (invite?.toPaused && user?._id === invite?.to?._id) ||
      (invite?.fromPaused && user?._id === invite?.from?._id)
    ) {
      return true;
    }
  }

  return false;
};

export const getCompanyText = (
  userData: IUser
): 'Business' | 'College' | 'Company' | 'Member of staff' | 'Student' => {
  if (userData?.type === USER_TYPE.merchant) return 'Business';
  if (userData?.type === USER_TYPE.student_body) return 'College';
  if (userData?.type === USER_TYPE.employer) return 'Company';

  if (
    userData?.type === USER_TYPE.employee &&
    isObject(userData?.employerId, true)
  ) {
    if (
      userData?.employerId?.type === USER_TYPE.employer ||
      userData?.employerId?.type === USER_TYPE.merchant ||
      (userData?.employerId?.type === USER_TYPE.student_body &&
        userData?.isSuperUser)
    )
      return 'Member of staff';
    return 'Student';
  } else {
    return 'Company';
  }
};

export const benefitCategoryIconTypeAllowed = (
  file: any,
  type = 'svg'
): boolean => {
  if (type === 'svg') {
    return svgIconTypes.includes(file.type.toLowerCase());
  } else if (type === 'other') {
    return allowedImageTypes.includes(file.type.toLowerCase());
  }
  return false;
};

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getOpacityForNotificationsHistory = (
  total: number,
  i: number
): number | undefined => {
  let opacity;

  if (total === 1) opacity = 1;

  if (total === 2) {
    if (i === 2) opacity = 0.7;
  }

  if (total === 3) {
    if (i === 2) opacity = 0.7;
    if (i === 3) opacity = 0.5;
  }

  if (total === 4) {
    if (i === 2) opacity = 0.7;
    if (i === 3) opacity = 0.5;
    if (i === 4) opacity = 0.3;
  }

  if (total === 5) {
    if (i === 2) opacity = 0.7;
    if (i === 3) opacity = 0.5;
    if (i === 4) opacity = 0.3;
    if (i === 5) opacity = 0.15;
  }

  return opacity;
};

export const checkIntegrationIsAllowedAndItsState = (
  userData: IUser
): {
  msTeamsIntegrationIsAllowed: any;
  msTeamsIsConnected: boolean;
  slackIntegrationIsAllowed: any;
  slackIsConnected: boolean;
  stripeIntegrationIsAllowed: any;
  slackIntegrationIsEnabled: boolean | undefined;
  microsoftTeamsIntegrationIsEnabled: boolean | undefined;
  userCanSendSlackNotifications: boolean | undefined;
  userCanSendMSTeamsNotifications: boolean | undefined;
} => {
  const userType = getObjectKey(userData, 'type');
  const isEmployee = userType === USER_TYPE.employee;
  const isSuperUserEmployee =
    isEmployee && getObjectKey(userData, 'isSuperUser');
  const isSimpleEmployee = isEmployee && !isSuperUserEmployee;

  // Check if integrations are allowed
  let msTeamsIntegrationIsAllowed = getObjectKey(
    userData,
    'allowMSTeamsConnection',
    false
  );
  let slackIntegrationIsAllowed = getObjectKey(
    userData,
    'allowSlackConnection'
  );
  let stripeIntegrationIsAllowed = getObjectKey(
    userData,
    'allowStripeConnection'
  );

  if (isSuperUserEmployee) {
    const orgOwnerUser = getObjectKey(userData, 'employerId');
    msTeamsIntegrationIsAllowed = getObjectKey(
      orgOwnerUser,
      'allowMSTeamsConnection'
    );
    slackIntegrationIsAllowed = getObjectKey(
      orgOwnerUser,
      'allowSlackConnection'
    );
    stripeIntegrationIsAllowed = getObjectKey(
      orgOwnerUser,
      'allowStripeConnection'
    );
  } else if (isSimpleEmployee) {
    msTeamsIntegrationIsAllowed = false;
    slackIntegrationIsAllowed = false;
    stripeIntegrationIsAllowed = false;
  }

  // Check integrations connection status
  const msTeamsIsConnected =
    getObjectKey(userData, 'msTeamsConDetails') != null;
  const slackIsConnected =
    getObjectKey(
      getObjectKey(userData, 'slackConnectionDetails'),
      'app_id',
      null
    ) != null;

  const slackIntegrationIsEnabled =
    userData?.slackIntegrationState &&
    userData?.slackIntegrationState === INTEGRATION_STATE.ENABLED;
  const microsoftTeamsIntegrationIsEnabled =
    userData?.microsoftTeamsIntegrationState &&
    userData?.microsoftTeamsIntegrationState === INTEGRATION_STATE.ENABLED;

  const userCanSendSlackNotifications =
    slackIntegrationIsEnabled && slackIsConnected;
  const userCanSendMSTeamsNotifications =
    msTeamsIsConnected && microsoftTeamsIntegrationIsEnabled;

  return {
    msTeamsIntegrationIsAllowed,
    msTeamsIsConnected,
    slackIntegrationIsAllowed,
    slackIsConnected,
    stripeIntegrationIsAllowed,
    slackIntegrationIsEnabled,
    microsoftTeamsIntegrationIsEnabled,
    userCanSendSlackNotifications,
    userCanSendMSTeamsNotifications,
  };
};
