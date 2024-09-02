import { FormFieldsEnum } from "@enums/formFieldsEnum";
import { TopupStatusEnum } from "src/play-and-win/enums";
import { IDefaultDBColumns } from "src/types/genericTypes";
import { ITopupRequestFormData } from "../formInputDataTypes";
import { IUser } from "../user/index";


// Interface 
export interface ITopUp extends ITopupRequestFormData,
    IDefaultDBColumns {
    [FormFieldsEnum.status]?: TopupStatusEnum | null;
    [FormFieldsEnum.isActive]?: boolean;

    // frontend only
    receptScreenshotFile?: File | null;
}

export interface ITopupRequest extends ITopUp {
    playerData?: IUser
} 
