import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { WithdrawRequestStatusEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from "src/types/genericTypes";
import { IWithdrawRequestFormData } from "../formInputDataTypes";
import { IUser } from "../user/index";

// Interfaces
export interface IWithdraw extends IWithdrawRequestFormData,
    IDefaultDBColumns {
    [FormFieldsEnum.isActive]?: boolean;
    [FormFieldsEnum.status]?: WithdrawRequestStatusEnum;
}

export interface IWithdrawRequest extends IWithdraw {
    [FormFieldsEnum.playerId]?: string;
    [FormFieldsEnum.playerData]?: Partial<IUser>;
}
