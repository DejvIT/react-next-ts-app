import React from "react";

import { TextField } from "@app/components";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe('TextField component', () => {
  it('Should render TextField component', () => {
    const component = shallow(
        <TextField
            label='test field'
            name="fieldName"
            onChange={() => {}}
            value='this is rendering test'
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render required TextField component', () => {
    const component = shallow(
        <TextField
            isRequired
            label='test field'
            name="fieldName"
            onChange={() => {}}
            value='this is rendering test'
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
