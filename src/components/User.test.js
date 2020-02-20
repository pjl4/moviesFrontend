import React from 'react';
import { mount } from 'enzyme';
import User from './User';
import { Item } from 'react-bootstrap/lib/Pagination';

describe('User component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <User
        match={{
          match: {
            params: {
              userID: '5e4d945539f90b001786c6ae'
            }
          }
        }}
      />
    );
  });
  it('should render as expected', () => {
    expect(wrapper.find('h2').text()).toEqual('peter');
  });
});
