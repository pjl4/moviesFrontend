import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });


describe('Movie component', () => {
   let wrapper;
   beforeEach(() => {
       wrapper = mount(<Movie match={{ params: { id: '5e4d9afa39f90b001786c6ba'}}} />);
   });

   it('renders', () => {
      expect(wrapper).not.toBeNull()
   });
});
