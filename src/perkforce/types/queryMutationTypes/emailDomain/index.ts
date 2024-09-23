import { IUser } from '../user'

// Enums
export enum EMAIL_DOMAIN_STATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

// Interface
export interface IEmailDomain {
  _id?: string
  request?: string
  createdBy?: IUser
  createdAt?: string
  status?: EMAIL_DOMAIN_STATUS
  expression?: string
  deletedAt?: string
}
export interface IAdminEmailDomain extends IEmailDomain {
  createdBy: {
    _id?: string
    email?: string
    companyName?: string
  }
}

export interface IAdminGetEmailDomainsResponse {
  adminGetEmailDomains: {
    emailDomains?: Array<IAdminEmailDomain>
  }
  count?: number
}

export interface IGetEmailDomainsResponse {
  getEmailDomains?: {
    emailDomains?: Array<IEmailDomain>
    count?: number
  }
}
