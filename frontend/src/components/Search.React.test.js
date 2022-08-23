import React from 'react';

import renderer from 'react-test-renderer';
import Search from './Search.js'

it('renders correctly', () => {
    const tree = renderer
        .create(<link to='/search'><Search/>search</link>)
        .toJSON();
    expect(tree).toMatchSnapshot()
});

