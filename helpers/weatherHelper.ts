import { WeatherItem } from '@app/types';
import { isToday, format, parse } from 'date-fns';

export const filterCurrentFromWeather = (weatherData: WeatherItem[]): WeatherItem[] => {
  return weatherData.filter((item) => isToday(new Date(item.time)));
};

export const filterFutureFromWeather = (weatherData: WeatherItem[]): WeatherItem[] => {
  return weatherData.filter((item) => !isToday(new Date(item.time)));
};

export const formatDateTime = (datetime: string): string => {
  const date = parse(datetime, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());

  if (isToday(date)) {
    return format(date, 'HH:mm');
  } else {
    return format(date, 'd. M. yyyy HH:mm');
  }
};
