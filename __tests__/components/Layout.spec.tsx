import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

import { Layout } from "@app/components";
import { Container } from "react-bootstrap";

describe('Layout component', () => {
  it('Should render component with wrapped child component', () => {
    const component = shallow(
        <Layout
            title='Test title'
        >
          <Container className='text-center'>
            <p>TEST</p>
          </Container>
        </Layout>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
