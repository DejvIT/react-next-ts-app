import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { Slideshow } from "@app/components";
import { HOMEPAGE_SLIDESHOW_ITEMS } from "@app/constants";


describe('Slideshow component', () => {
  it('Should render component', () => {
    const component = shallow(
        <Slideshow items={HOMEPAGE_SLIDESHOW_ITEMS} rotationLength={5000} showArrows showMiniatures/>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
