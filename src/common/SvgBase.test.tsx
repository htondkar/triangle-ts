import { shallow } from 'enzyme';
import React from 'react';

import { SvgBase } from './SvgBase';

describe('SvgBase', () => {
  it('Should render without crashing', () => {
    shallow(<SvgBase />)
  })
})
