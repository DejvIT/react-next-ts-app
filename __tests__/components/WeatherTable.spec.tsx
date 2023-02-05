import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { WeatherTable } from "@app/components";
import { unitsMockData, weatherMockDataArray } from "@app/__tests__/mock-data/weather-mock";

describe('WeatherDetailModal component', () => {
  it('Should render component', () => {
    const component = shallow(
        <WeatherTable units={unitsMockData} weatherItems={weatherMockDataArray} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
