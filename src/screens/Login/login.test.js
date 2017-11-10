import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';



it('renders without crashing', () => {
  shallow(<Login />);
});


it('renders welcome message', () => {
  const wrapper = shallow(<Login />);
  const welcome = <h1>Login</h1>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
