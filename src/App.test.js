import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render the navigation bar', () => {
    const component = shallow(<App />);
    expect(component.contains(<main className="appMain"></main>)).toBe(true);
  });
});
