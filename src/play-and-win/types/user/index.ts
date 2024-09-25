import { FormFieldsEnum } from '@enums/formFieldsEnum';
import { BooleanEnum, TransferMethodEnum } from '@enums/generic';
import { PermissionEnum, RoleEnum } from '@enums/rolePermissionsEnum';
import { IDefaultDBColumns } from 'src/types/genericTypes';

// Interfaces
export interface IUser extends IDefaultDBColumns {
	[FormFieldsEnum.name]?: string;
	[FormFieldsEnum.email]?: string;
	[FormFieldsEnum.createdAt]?: string;
	[FormFieldsEnum.updatedAt]?: string;
	[FormFieldsEnum.country]?: string;
	[FormFieldsEnum.city]?: string;
	[FormFieldsEnum.referralCode]?: string;
	[FormFieldsEnum.withdrawOptions]?: Array<TransferMethodEnum>;
	[FormFieldsEnum.phoneNumber]?: string;
	[FormFieldsEnum.blockedAt]?: string;
	[FormFieldsEnum.photoURL]?: string;
	[FormFieldsEnum.referredBy]?: string;
	[FormFieldsEnum.cnic]?: string;
	[FormFieldsEnum.address]?: string;
	[FormFieldsEnum.emailVerifiedAt]?: string | number;
	[FormFieldsEnum.emailVerified]?: BooleanEnum;
	[FormFieldsEnum.disabled]?: BooleanEnum;

	[FormFieldsEnum.permissions]?: Array<PermissionEnum>;
	[FormFieldsEnum.balance]?: number;
	[FormFieldsEnum.role]?: RoleEnum;

	[FormFieldsEnum.password]?: string;
	[FormFieldsEnum.passwordConfirmation]?: string;
	// For frontend
	[FormFieldsEnum.actions]?: string;
	[FormFieldsEnum.isBlocked]?: BooleanEnum;

	[FormFieldsEnum.extraData]: unknown;
}
