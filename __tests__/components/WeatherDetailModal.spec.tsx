import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { WeatherDetailModal } from "@app/components";
import { unitsMockData, weatherCardMockData } from "@app/__tests__/mock-data/weather-mock";

describe('WeatherDetailModal component', () => {
  it('Should render component when visible', () => {
    const component = shallow(
        <WeatherDetailModal
            isVisible
            onClose={jest.fn()}
            units={unitsMockData}
            weatherData={weatherCardMockData}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component when not visible', () => {
    const component = shallow(
        <WeatherDetailModal
            isVisible={false}
            onClose={jest.fn()}
            units={unitsMockData}
            weatherData={weatherCardMockData}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
