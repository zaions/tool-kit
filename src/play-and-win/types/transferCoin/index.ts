import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { ProcessStatusEnum } from "@enums/generic";
import { IUser } from "../user/index";


// Interfaces 
export interface ITransferCoin {
    [FormFieldsEnum.id]?: string;
    [FormFieldsEnum.amount]?: number;
    [FormFieldsEnum.otherPlayerPhoneNumber]?: string;
    [FormFieldsEnum.userRemarks]?: string;
    [FormFieldsEnum.status]?: ProcessStatusEnum;
    [FormFieldsEnum.otherPlayerId]?: string;
    [FormFieldsEnum.otherPlayerData]?: Partial<IUser>;
    [FormFieldsEnum.isActive]?: boolean;
    [FormFieldsEnum.sortOrderNo]?: number;
    [FormFieldsEnum.createdAt]?: string;
    [FormFieldsEnum.updatedAt]?: string | number;
    [FormFieldsEnum.deletedAt]?: string | number;
}
