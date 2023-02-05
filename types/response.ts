export type WeatherDataResponse = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number, number];
  };
  properties: {
    meta: {
      updated_at: string;
      units: WeatherUnits;
    };
    timeseries: Array<WeatherItem>;
  };
};

export type WeatherUnits = {
  air_pressure_at_sea_level: string;
  air_temperature: string;
  cloud_area_fraction: string;
  precipitation_amount: string;
  relative_humidity: string;
  wind_from_direction: string;
  wind_speed: string;
};

export type WeatherItem = {
  time: string;
  data: WeatherData;
};

export type WeatherData = {
  instant?: {
    details: {
      air_pressure_at_sea_level: number;
      air_temperature: number;
      cloud_area_fraction: number;
      relative_humidity: number;
      wind_from_direction: number;
      wind_speed: number;
    };
  };
  next_1_hours?: FutureWeatherInfo;
  next_6_hours?: FutureWeatherInfo;
  next_12_hours?: FutureWeatherInfo;
};

export type FutureWeatherInfo = {
  summary: {
    symbol_code: string;
  };
  details?: {
    precipitation_amount: number;
  };
};
