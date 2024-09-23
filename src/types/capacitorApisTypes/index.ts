import { GeoLocationResponseCodeEnum } from "@enums/capacitorApis";

export type GetCapGeoLocationApiDataResponse = {
    coords: Partial<GeolocationCoordinates> | null;
    message: string;
    code: GeoLocationResponseCodeEnum;
    success: boolean;
};
