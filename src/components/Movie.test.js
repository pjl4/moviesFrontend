import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie component', () => {
    it('should render as expected', () => {
        const component = shallow(<Movie />);
        expect(
            component.contains(<div className="movieInfo"></div>)
        ).toBe(false);
    });
});
