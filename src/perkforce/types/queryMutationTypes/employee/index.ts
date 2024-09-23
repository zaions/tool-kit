import { IGroup } from '../group'
import { IUser } from '../user'

// interface
export interface IEmployee {
  _id?: string
  firstName?: string
  lastName?: string
  email?: string
  logo?: string
  status?: string
  allowedAccessBecause?: boolean
  allowedAccessEmailFormat?: boolean
  isSuperUser?: boolean
  orderEmailRecipient?: string
  groups?: Array<IGroup>
  type?: string
}

export interface IGetEmployeesByEmployerResponse {
  getEmployeesByEmployer: {
    employees?: Array<IEmployee>
    count?: number
  }
}

export interface IGetSuperEmployeesResponse {
  getSuperEmployeesByEmployer: Array<IUser>
}

export interface IGetOrderEmailRecipientsResponse {
  getOrderEmailRecipients: Array<IUser>
}

export interface IEmployeesList {
  employees?: Array<IUser>
  count?: number
}

export interface IGetSuperEmployeesByEmployerResponse {
  getSuperEmployeesByEmployer?: Array<IUser>
}
