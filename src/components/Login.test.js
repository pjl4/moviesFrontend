import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login component', () => {
   let wrapper;
   beforeEach(() => {
      wrapper = mount(<Login />);
   });

   it('renders', () => {
      expect(wrapper).not.toBeNull();
   });
});
