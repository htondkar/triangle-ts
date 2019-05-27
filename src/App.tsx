import React from 'react';

import { AppContainer } from './common/AppContainer';
import { Content } from './common/Content';
import { Main } from './common/Main';
import { TriangleType } from './pages/TriangleType/TriangleType';

export function App() {
  return (
    <AppContainer>
      <Main>
        <Content>
          <TriangleType />
        </Content>
      </Main>
    </AppContainer>
  )
}
