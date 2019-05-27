import React from 'react';
import styled from 'styled-components';

import { Triangle } from './Triangle.model';
import { TriangleTypeForm } from './TriangleForm';
import { TriangleTypeResult } from './TriangleTypeResult';

const TriangleTypePageLayout = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
`

export const TriangleType: React.FunctionComponent = () => {
  const [triangle, setTriangle] = React.useState<Partial<Triangle> | null>(null)

  return (
    <TriangleTypePageLayout>
      <TriangleTypeForm onChange={setTriangle} values={triangle} />
      <TriangleTypeResult triangle={triangle} />
    </TriangleTypePageLayout>
  )
}
