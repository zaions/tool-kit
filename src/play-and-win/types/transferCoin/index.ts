import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { ProcessStatusEnum } from "@enums/generic";
import { IDefaultDBColumns } from "src/types/genericTypes";
import { ITransferCoinsRequestFormData } from "../formInputDataTypes";
import { IUser } from "../user/index";


// Interfaces 
export interface ITransferCoin extends ITransferCoinsRequestFormData,
    IDefaultDBColumns {
    [FormFieldsEnum.status]?: ProcessStatusEnum;
    [FormFieldsEnum.otherPlayerId]?: string;
    [FormFieldsEnum.otherPlayerData]?: Partial<IUser>;
    [FormFieldsEnum.otherPlayerPhoneNumber]: string;
}
