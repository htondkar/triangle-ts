import React from 'react';
import styled from 'styled-components';

import { Triangle } from './Triangle.mode';
import { TriangleTypeForm } from './TriangleForm';
import { TriangleTypeResult } from './TriangleTypeResult';

const TriangleTypePageLayout = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

export const TriangleType: React.FunctionComponent<{}> = props => {
  const handleInputChange = (triangle: Triangle) => {
    console.log(triangle)
  }

  return (
    <TriangleTypePageLayout>
      <TriangleTypeForm onInputChange={handleInputChange} />
      <TriangleTypeResult />
    </TriangleTypePageLayout>
  )
}
