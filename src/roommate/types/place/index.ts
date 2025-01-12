import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import {
  AgreementStatusEnum,
  BuildingTypeEnum,
  PlaceAvailabilityTermEnum,
  PlacePreferenceEnum,
  PlaceStatusEnum,
  PrivateShareEnum,
  RentInclusionsEnum,
  TimeUnitEnum,
} from 'src/roommate/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { ILocation } from '../general';

export interface IRent {
  [FormFieldsEnum.amount]?: number;
  [FormFieldsEnum.period]?: number;
  [FormFieldsEnum.currency]?: string;
}

export interface IPlaceGeneralInfo {
  [FormFieldsEnum.title]?: string;
  [FormFieldsEnum.buildingType]?: BuildingTypeEnum;
  [FormFieldsEnum.place]?: PlacePreferenceEnum;
  [FormFieldsEnum.rent]?: IRent;
}

export interface IPlaceImages {
  [FormFieldsEnum.bedroomImages]?: string;
  [FormFieldsEnum.washroomImages]?: string;
  [FormFieldsEnum.kitchenImages]?: string;
  [FormFieldsEnum.otherImages]?: string;
}

export interface IMinimumLease {
  [FormFieldsEnum.leaseTime]?: number;
  [FormFieldsEnum.leaseTimeUnit]?: TimeUnitEnum;
}

export interface IHouseInfo {
  [FormFieldsEnum.bedrooms]?: number;
  [FormFieldsEnum.washrooms]?: number;
  [FormFieldsEnum.parking]?: number;
  [FormFieldsEnum.other]?: Array<{
    [FormFieldsEnum.type]?: string;
    [FormFieldsEnum.units]?: number;
    [FormFieldsEnum.detail]?: string;
  }>;
}

export interface IPlaceSharingUnit {
  [FormFieldsEnum.type]?: PrivateShareEnum;
  [FormFieldsEnum.detail]?: string;
}

export interface IPlaceSharing {
  [FormFieldsEnum.bedroom]?: IPlaceSharingUnit;
  [FormFieldsEnum.livingRoom]?: IPlaceSharingUnit;
  [FormFieldsEnum.kitchen]?: IPlaceSharingUnit;
  [FormFieldsEnum.washroom]?: IPlaceSharingUnit;
  [FormFieldsEnum.livingWithLandlord]?: boolean;
  [FormFieldsEnum.livingWithPersonDetails]?: string;
}

export interface IOtherRequirements {
  [FormFieldsEnum.pets]?: AgreementStatusEnum;
  [FormFieldsEnum.smoke]?: AgreementStatusEnum;
  [FormFieldsEnum.furnished]?: AgreementStatusEnum;
}

export interface IPlaceBenefits {
  [FormFieldsEnum.benefits]?: RentInclusionsEnum;
  [FormFieldsEnum.otherBenefits]?: string;
}

export interface IPlaceDetail {
  [FormFieldsEnum.availabilityTerm]?: PlaceAvailabilityTermEnum;
  [FormFieldsEnum.moveInDate]?: string | number;
  [FormFieldsEnum.moveOutDate]?: string | number;
  [FormFieldsEnum.minimumLease]?: IMinimumLease;
  [FormFieldsEnum.houseInfo]?: IHouseInfo;
  [FormFieldsEnum.otherRequirements]?: IOtherRequirements;
  [FormFieldsEnum.description]?: string;
  [FormFieldsEnum.placeSharingDetail]?: IPlaceSharing;
  [FormFieldsEnum.placeBenefits]?: IPlaceBenefits;
}

export interface IPlace extends IDefaultDBColumns {
  [FormFieldsEnum.generalInfo]?: IPlaceGeneralInfo;
  [FormFieldsEnum.location]?: ILocation;
  [FormFieldsEnum.images]?: IPlaceImages;
  [FormFieldsEnum.details]?: IPlaceDetail;
  [FormFieldsEnum.status]?: PlaceStatusEnum;
}
