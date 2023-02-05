import React from "react";

import { Button, CloseIcon } from "@app/components";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe('Button component', () => {
  it('Should render component as primary variant', () => {
    const component = shallow(
        <Button id='1' type='submit' variant='primary' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as secondary variant', () => {
    const component = shallow(
        <Button id='2' onClick={() => {}} variant='secondary' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as tertiary variant', () => {
    const component = shallow(
        <Button id='3' variant='tertiary' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as icon variant', () => {
    const component = shallow(
        <Button onClick={() => {}} variant='icon'>
          <CloseIcon hexColor="var(--clrDarkSecondary)" />
        </Button>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as default variant', () => {
    const component = shallow(
        <Button onClick={() => {}} type='submit' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as dark variant', () => {
    const component = shallow(
        <Button variant='dark' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as bordered variant', () => {
    const component = shallow(
        <Button variant='bordered' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('Should render component as link-secondary variant', () => {
    const component = shallow(
        <Button
            className='test'
            type='button'
            variant='link-secondary'
        />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
