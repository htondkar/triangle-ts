import React from 'react';

import { TriangleTypePageLayout } from './components/TrianglePageLayout';
import { Triangle } from './Triangle.model';
import { TriangleTypeForm } from './TriangleTypeForm';
import { TriangleTypeResult } from './TriangleTypeResult';

export const TriangleTypePage: React.FunctionComponent = () => {
  const [triangle, setTriangle] = React.useState<Partial<Triangle> | null>(null)

  return (
    <TriangleTypePageLayout>
      <TriangleTypeForm onChange={setTriangle} values={triangle} />
      <TriangleTypeResult triangle={triangle} />
    </TriangleTypePageLayout>
  )
}
