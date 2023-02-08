import React from "react";

import { NumberField } from "@app/components";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe('NumberField component', () => {

  it('Should render NumberField component', () => {
    const component = shallow(
        <NumberField
            label='test weight label'
            min={0}
            name="testWeight"
            onChange={() => {}}
            precision={0}
            suffix={<>kg</>}
            value={1950}
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
