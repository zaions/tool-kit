import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { TransferMethodEnum } from "@enums/generic";
import { WithdrawRequestStatusEnum } from "src/play-and-win/enums";
import { IUser } from "../user/index";

// Interfaces
export interface IWithdraw {
    [FormFieldsEnum.id]?: string;
    [FormFieldsEnum.amount]?: number;
    [FormFieldsEnum.agentRemarks]?: string;
    [FormFieldsEnum.transferMethod]?: TransferMethodEnum | null;
    [FormFieldsEnum.receptScreenshot]?: string;
    [FormFieldsEnum.isActive]?: boolean;
    [FormFieldsEnum.sortOrderNo]?: string;
    [FormFieldsEnum.status]?: WithdrawRequestStatusEnum;
    [FormFieldsEnum.createdAt]?: string;
    [FormFieldsEnum.updatedAt]?: string;
    [FormFieldsEnum.deletedAt]?: string;
}

export interface IWithdrawRequest extends IWithdraw {
    [FormFieldsEnum.userId]?: string;
    [FormFieldsEnum.playerData]?: Partial<IUser>;

}
