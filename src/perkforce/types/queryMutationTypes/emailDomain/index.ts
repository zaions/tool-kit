import { EMAIL_DOMAIN_STATUS } from 'src/perkforce/enums';
import { IUser } from '../user';

// Interface
export interface IEmailDomain {
  _id?: string;
  request?: string;
  createdBy?: IUser;
  createdAt?: string;
  status?: EMAIL_DOMAIN_STATUS;
  expression?: string;
  deletedAt?: string;
}
export interface IAdminEmailDomain extends IEmailDomain {
  createdBy: {
    _id?: string;
    email?: string;
    companyName?: string;
  };
}

export interface IAdminGetEmailDomainsResponse {
  adminGetEmailDomains: {
    emailDomains?: Array<IAdminEmailDomain>;
  };
  count?: number;
}

export interface IGetEmailDomainsResponse {
  getEmailDomains?: {
    emailDomains?: Array<IEmailDomain>;
    count?: number;
  };
}
