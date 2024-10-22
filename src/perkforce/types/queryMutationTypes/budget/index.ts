import { BudgetStatusE } from 'src/perkforce/enums';
import { IUser } from '../user';

// Interfaces
export interface IBudget {
  _id?: string;
  expiry?: string;
  onlyEmployerApproval?: boolean;
  budgetEntries?: Array<IBudgetDetail>;
  total?: number;
  stripeFee?: number;
  totalAmount?: number;
  amountToBeApproved?: number;
  amountApproved?: number;
  paymentIntentCaptured?: boolean;
  createdBy?: IUser;
  createdAt?: string;
  deletedAt?: string;
}

export interface IBudgetDetail {
  _id?: string;
  id?: string;
  budget?: IBudget;
  claim?: IBudgetClaim;
  amount?: number;
  createdFor?: IUser;
  createdBy?: IUser;
  createdAt?: string;
  deletedAt?: string;
}

export interface IBudgetClaim {
  _id?: string;
  budgetEntry?: IBudgetDetail;
  amountApproved?: number;
  receipt?: String;
  comment?: String;
  amountRequested?: number;
  status?: BudgetStatusE;
  createdBy?: IUser;
  createdAt?: string;
  deletedAt?: string;
}

export interface IBudgetDetailPagination {
  total?: number;
  budgetsDetail?: Array<IBudgetDetail>;
}

export interface IGetBudgetAmountByUserResponse {
  getBudgetAmountByUser?: number;
}

export interface IGetBudgetDetailByIdResponse {
  getBudgetDetailById?: IBudgetDetail;
}

export interface IGetBudgetsDetailByUserResponse {
  getBudgetsDetailByUser?: IBudgetDetailPagination;
}
