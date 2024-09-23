import { urlParams } from "../generic";

export const googleApis = {
    geoLocationApi: {
        url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${urlParams.googleMapsApiKey}`,
    },
} as const;