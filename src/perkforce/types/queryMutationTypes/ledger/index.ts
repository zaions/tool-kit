export interface ILedger {
  _id: string
  ledgerDetail: Array<ILedgerDetail>
  createdAt: string
  deletedAt: string
}

export interface IMetaData {
  sender?: string
  receiver?: string
}

export interface ILedgerDetail {
  _id?: string
  ledgerId?: string
  actorId?: string
  debit?: number
  credit?: number
  balance?: number
  metadata?: IMetaData
  createdAt?: string
  deletedAt?: string
}

export interface IGetLedgerByActorResponse {
  getLedgerByActor?: Array<ILedger>
}

export interface IGetBalanceByUserResponse {
  getBalanceByUser?: number
}
