import { HttpClient } from './http-client';

export const apiWeather = new HttpClient('https://api.met.no/weatherapi/locationforecast/2.0');
