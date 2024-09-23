import { IPerk } from '../perk'
import { IUser } from '../user'

export interface IPerkInterest {
  _id?: string
  perk?: IPerk
  user?: IUser
  createdAt?: Date
}

export interface IGetPerkInterestRegisteredResponse {
  getPerkInterestRegistered: {
    _id?: string
  }
}

export interface IGetAllPerkInterestRegisteredUsersResponse {
  getAllPerkInterestRegisteredUsers: {
    perkInterests?: Array<IPerkInterest>
    count?: number
  }
}

export interface PerkInterestOrganizationList {
  _id: string
  companyName: string
}

export interface IGetPerkInterestRegisteredOrganizationsResponse {
  getPerkInterestRegisteredOrganisations: Array<PerkInterestOrganizationList>
}
export interface IPerkInterestList {
  perkInterests?: Array<IPerkInterest>
  count?: number
}

export interface IPerkInterestOrganizationList {
  _id?: string
  companyName?: string
}
