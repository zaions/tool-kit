
import { GROUP_TYPE } from 'src/perkforce/enums'
import { IUser } from '../user'

// Interfaces
export interface IGroup {
  _id?: string
  name?: string
  slug?: string
  description?: string
  department?: string
  employerId?: IUser
  members?: Array<IUser>
  createdAt?: string
  type?: GROUP_TYPE
}

export interface IGetGroupsByEmployerResponse {
  getGroupsByEmployer: {
    groups?: Array<IGroup>
    count?: number
  }
}

export interface IGetGroupBySlugResponse {
  getGroupBySlug: IGroup
}

export interface IGetMembersByGroupResponse {
  getMembersByGroup: {
    members: Array<IUser>
    count?: number
  }
}

export interface IGetAllowGroupDeleteResponse {
  getAllowGroupDelete: {
    totalPerks?: number
  }
}
