import { shallow } from 'enzyme';
import React from 'react';

import { AppContainer } from './AppContainer';

describe('AppContainer', () => {
  it('Should render without crashing', () => {
    shallow(<AppContainer />)
  })
})
