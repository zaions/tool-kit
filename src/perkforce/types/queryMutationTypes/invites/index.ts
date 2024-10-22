import { INVITE_STATUS, USER_TYPE } from 'src/perkforce/enums';
import { IUser } from '../user';

// Interface
export interface IInvite {
  _id?: string;
  status?: INVITE_STATUS;
  from?: IUser;
  to?: IUser;
  fromType?: USER_TYPE;
  toType?: USER_TYPE;
  toPaused?: boolean;
  fromPaused?: boolean;
  referrer?: IUser;
  detailsForRecipient?: string;
  toExists?: boolean;
  createdAt?: string;
  acceptedAt?: string;
  deletedAt?: string;
}

export interface IGetEmployerMerchantInvitesResponse {
  getEmployerMerchantInvites: {
    invites: Array<IInvite>;
    count?: number;
  };
}

export interface IGetInviteByIdResponse {
  getInviteById: IInvite;
}

export interface IGetIsConnectedResponse {
  getIsConnected?: boolean;
}

export interface IGetConnectionsResponse {
  getConnections: {
    connectedCount?: number;
    pendingCount?: number;
  };
}

export interface IInviteList {
  invites?: Array<IInvite>;
  count?: number;
}
