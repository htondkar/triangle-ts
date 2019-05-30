import { shallow } from 'enzyme';
import React from 'react';

import { Content } from './Content';

describe('Content', () => {
  it('Should render without crashing', () => {
    shallow(<Content />)
  })
})
