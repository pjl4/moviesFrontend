import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './HeaderContainer';
import logo from '../logo.svg';

describe('HeaderContainer component', () => {
  it('should render logo', () => {
    const component = shallow(<HeaderContainer />);
    expect(
      component.contains(<img className="logo" src={logo} alt="logo" />)
    ).toBe(true);
  });
});
