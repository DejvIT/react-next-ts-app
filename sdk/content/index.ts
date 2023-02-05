import { apiWeather } from '@app/sdk/client';
import { WeatherDataResponse } from '@app/types';

export const injectHeaders = () => {
  return {
    headers: { 'User-Agent': 'my-weather-app' },
  };
};

export const getWeatherData = async (latitude: number, longitude: number) => {
  const { data } = await apiWeather.get<WeatherDataResponse>(
    `/compact?lat=${latitude}&lon=${longitude}`,
    injectHeaders(),
  );
  return data;
};
