import { WeatherData, WeatherItem, WeatherUnits } from "@app/types";

export const weatherMockDataArray: WeatherItem[] = [
    {
        time: '2022-02-04T12:00:00Z',
        data: {
            instant: {
                details: {
                    air_pressure_at_sea_level: 1013.25,
                    air_temperature: 12.5,
                    cloud_area_fraction: 0.8,
                    relative_humidity: 0.7,
                    wind_from_direction: 180,
                    wind_speed: 3,
                },
            },
        },
    },
    {
        time: '2022-02-05T12:00:00Z',
        data: {
            instant: {
                details: {
                    air_pressure_at_sea_level: 1012.75,
                    air_temperature: 13,
                    cloud_area_fraction: 0.7,
                    relative_humidity: 0.8,
                    wind_from_direction: 190,
                    wind_speed: 4,
                },
            },
        },
    },
];

export const unitsMockData: WeatherUnits = {
    air_pressure_at_sea_level: 'hPa',
    air_temperature: 'celsius',
    cloud_area_fraction: '%',
    precipitation_amount: 'mm',
    relative_humidity: '%',
    wind_from_direction: 'degrees',
    wind_speed: 'm/s',
};

export const weatherCardMockData: WeatherData = {
    instant: {
        details: {
            air_pressure_at_sea_level: 1038.7,
            air_temperature: -11.9,
            cloud_area_fraction: 75,
            relative_humidity: 79.3,
            wind_from_direction: 1.2,
            wind_speed: 3.6,
        },
    },
    next_12_hours: {
        summary: {
            symbol_code: 'cloudy',
        },
    },
    next_1_hours: {
        summary: {
            symbol_code: 'partlycloudy_night',
        },
        details: {
            precipitation_amount: 0,
        },
    },
    next_6_hours: {
        summary: {
            symbol_code: 'cloudy',
        },
        details: {
            precipitation_amount: 0,
        },
    },
};
