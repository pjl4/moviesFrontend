import React from 'react';

import Submit from './Submit';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Submit component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Submit />);
    });

    it('renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
