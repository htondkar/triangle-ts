import React from 'react'
import { TriangleType } from './pages/TriangleType/TriangleType'
import { AppContainer } from './common/AppContainer'
import { Main } from './common/Main'
import { Content } from './common/Content'

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
