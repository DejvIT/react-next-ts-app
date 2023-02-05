import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import WeatherCard from "@app/components/WeatherCard";
import { unitsMockData, weatherCardMockData } from "@app/__tests__/mock-data/weather-mock";

const data = weatherCardMockData;

describe('WeatherCard component', () => {
  it('Should render component in primary variant', () => {
    const component = shallow(
        <WeatherCard
            airPressure={data?.instant?.details.air_pressure_at_sea_level}
             airTemperature={data?.instant?.details.air_temperature}
             cloudAreaFraction={data?.instant?.details.cloud_area_fraction}
             onClick={jest.fn()}
             relativeHumidity={data?.instant?.details.relative_humidity}
             time='2023-02-05T21:00:00Z'
             units={unitsMockData}
             variant='Primary'
             windDirection={data?.instant?.details.wind_from_direction}
             windSpeed={data?.instant?.details.wind_speed}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });


  it('Should render component in info variant', () => {
    const component = shallow(
        <WeatherCard
            airPressure={data?.instant?.details.air_pressure_at_sea_level}
            airTemperature={data?.instant?.details.air_temperature}
            cloudAreaFraction={data?.instant?.details.cloud_area_fraction}
            onClick={jest.fn()}
            relativeHumidity={data?.instant?.details.relative_humidity}
            time='2023-02-05T21:00:00Z'
            units={unitsMockData}
            variant='Info'
            windDirection={data?.instant?.details.wind_from_direction}
            windSpeed={data?.instant?.details.wind_speed}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });


  it('Should render component in selected primary variant', () => {
    const component = shallow(
        <WeatherCard
            airPressure={data?.instant?.details.air_pressure_at_sea_level}
            airTemperature={data?.instant?.details.air_temperature}
            cloudAreaFraction={data?.instant?.details.cloud_area_fraction}
            onClick={jest.fn()}
            relativeHumidity={data?.instant?.details.relative_humidity}
            time='2023-02-05T21:00:00Z'
            units={unitsMockData}
            selected
            variant='Primary'
            windDirection={data?.instant?.details.wind_from_direction}
            windSpeed={data?.instant?.details.wind_speed}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
