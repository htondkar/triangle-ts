import React from 'react';
import styled from 'styled-components';

export const AppContainer: React.FunctionComponent<{}> = styled.section.attrs({
  'data-ts': 'App',
})`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
