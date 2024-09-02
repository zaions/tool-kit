import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { TransferMethodEnum } from "@enums/generic";
import { TopupStatusEnum } from "src/play-and-win/enums";
import { IUser } from "../user/index";


// Interface 
export interface ITopUp {
    [FormFieldsEnum.id]?: string;

    [FormFieldsEnum.amount]?: number;
    [FormFieldsEnum.agentRemarks]?: string;
    [FormFieldsEnum.transferMethod]?: TransferMethodEnum | null;
    [FormFieldsEnum.receptScreenshot]?: string | null;
    [FormFieldsEnum.status]?: TopupStatusEnum | null;

    [FormFieldsEnum.isActive]?: boolean;
    [FormFieldsEnum.sortOrderNo]?: string;
    [FormFieldsEnum.createdAt]?: string;
    [FormFieldsEnum.updatedAt]?: string;
    [FormFieldsEnum.deletedAt]?: string;

    // frontend only
    receptScreenshotFile?: File | null;
}

export interface ITopupRequest extends ITopUp {
    playerData?: IUser
} 
