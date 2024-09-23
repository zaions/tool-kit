import { IUser } from '../user'

export interface ImportEmployeeItem {
  firstname: string
  lastname: string
  email: string
}

export interface ImportEmployeeHistoryUserItem {
  rowIndex: number
  employee: ImportEmployeeItem
}

export interface ImportEmployeeFile {
  filename: string
  mimetype: string
  location: string
}

export interface IImportEmployeesHistoryItem {
  _id?: string
  duplicateUsersFound?: boolean
  usersWithNoEmailFound?: boolean
  usersWithInvalidEmailFound?: boolean
  duplicateUsers?: Array<ImportEmployeeHistoryUserItem>
  usersWithNoEmail?: Array<ImportEmployeeHistoryUserItem>
  usersWithInvalidEmail?: Array<ImportEmployeeHistoryUserItem>
  totalRowsHandled?: number
  userId?: IUser
  errorOccured?: boolean
  errors?: string
  file?: ImportEmployeeFile
  createdAt?: string
  deletedAt?: string
}

export interface IGetImportEmployeesHistoryResponse {
  getImportEmployeesHistory?: {
    importEmployeesHistory?: Array<IImportEmployeesHistoryItem>
  }
}

export interface ImportEmployeesHistoryList {
  importEmployeesHistory?: Array<IImportEmployeesHistoryItem>
}
