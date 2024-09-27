import { FormFieldsEnum } from '@enums/formFieldsEnum';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { IGameFormData } from '../formInputDataTypes';

// Interfaces
export interface IGame extends IGameFormData, Partial<IDefaultDBColumns> {
	// frontend only
	[FormFieldsEnum.imageFile]?: File | null;
}
