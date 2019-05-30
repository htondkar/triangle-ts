import { shallow } from 'enzyme';
import React from 'react';

import { Main } from './Main';

describe('Main', () => {
  it('Should render without crashing', () => {
    shallow(<Main />)
  })
})
