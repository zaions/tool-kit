import { IUser } from '../user'

export interface IBlockEmailExpression {
  _id?: string
  createdBy?: IUser
  createdAt?: string
  expression?: string
  deletedAt?: string
}

export interface IAdminGetBlockEmailExpressionsResponse {
  adminGetBlockEmailExpressions?: IBlockEmailExpressionList
}

export interface IBlockEmailExpressionList {
  blockEmailExpressions?: Array<IBlockEmailExpression>
  count?: number
}
