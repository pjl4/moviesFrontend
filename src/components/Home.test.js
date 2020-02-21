import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home component', () => {
  it('should render as expected', () => {
    const component = shallow(<Home />);
    expect(
      component.contains(<h1 className="topHead">Top Submissions</h1>)
    ).toBe(true);
  });
});
