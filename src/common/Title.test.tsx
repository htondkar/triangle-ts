import { shallow } from 'enzyme';
import React from 'react';

import { Title } from './Title';

describe('Title', () => {
  it('Should render without crashing', () => {
    shallow(<Title />)
  })
})
