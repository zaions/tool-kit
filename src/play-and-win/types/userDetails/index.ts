import { IDefaultDBColumns } from '@app-types/genericTypes';
import {
  ICommonUserPropsAuthAndDetailsCollection,
  IThirdPartyAppsData,
} from '../user';

export interface IUserDetail
  extends IDefaultDBColumns,
    IThirdPartyAppsData,
    ICommonUserPropsAuthAndDetailsCollection {}
