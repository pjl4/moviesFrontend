import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Signup component', () => {
   let wrapper;
   beforeEach(() => {
      wrapper = mount(<Signup />);
   });

   it('renders', () => {
      expect(wrapper).not.toBeNull();
   });
});
