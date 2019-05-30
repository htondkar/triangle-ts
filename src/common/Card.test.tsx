import { shallow } from 'enzyme';
import React from 'react';

import { Card } from './Card';

describe('Card', () => {
  it('Should render without crashing', () => {
    shallow(<Card />)
  })
})
