import { FormFieldsEnum } from '@enums/formFieldsEnum';
import { BooleanEnum } from '@enums/generic';
import { TopupStatusEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { ITopupRequestFormData } from '../formInputDataTypes';
import { IUser } from '../user/index';

// Interface
export interface ITopUp extends ITopupRequestFormData, IDefaultDBColumns {
	[FormFieldsEnum.status]?: TopupStatusEnum | null;
	[FormFieldsEnum.isActive]?: BooleanEnum;

	// frontend only
	[FormFieldsEnum.receptScreenshotFile]?: File | null;
}

export interface ITopupRequest extends ITopUp {
	[FormFieldsEnum.playerData]?: IUser;
}
