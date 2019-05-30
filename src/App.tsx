import React from 'react';

import { AppContainer } from './common/AppContainer';
import { Content } from './common/Content';
import { Main } from './common/Main';
import { TriangleTypePage } from './pages/TriangleType/TriangleTypePage';

export function App() {
  return (
    <AppContainer>
      <Main>
        <Content>
          <TriangleTypePage />
        </Content>
      </Main>
    </AppContainer>
  )
}
