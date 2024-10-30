import { urlParams } from '../generic';

export const googleApis: {
  readonly geoLocationApi: {
    readonly url: 'https://www.googleapis.com/geolocation/v1/geolocate?key={{googleMapsApiKey}}';
  };
} = {
  geoLocationApi: {
    url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${urlParams.googleMapsApiKey}`,
  },
} as const;
