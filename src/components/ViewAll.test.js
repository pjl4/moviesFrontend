import React from 'react';
import { mount } from 'enzyme';
import ViewAll from './ViewAll';

describe('ViewAll component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ViewAll match={{ params: { genre: 'Comedy' } }} />);
  });
  it('should render as expected', () => {
    expect(wrapper.find('h2').text()).toEqual('Comedy');
  });
});
