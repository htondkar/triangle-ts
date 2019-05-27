import React from 'react';

import { EquilateralTriangle } from './components/EquilateralTriangle';
import { IsoclinesTriangle } from './components/IsoclinesTriangle';
import { ScaleneTriangle } from './components/ScelaneTriangle';
import { determineTriangleType, isValidTriangle, Triangle, TriangleTypes } from './Triangle.model';

interface Props {
  triangle: Partial<Triangle> | null
}

const messages: Record<TriangleTypes, React.ReactNode> = {
  [TriangleTypes.Equilateral]: (
    <div>
      It is Equilateral <EquilateralTriangle />
    </div>
  ),
  [TriangleTypes.Isosceles]: (
    <div>
      It is Isosceles <IsoclinesTriangle />
    </div>
  ),
  [TriangleTypes.Scalene]: (
    <div>
      It is Scalene <ScaleneTriangle />
    </div>
  ),
}

export const TriangleTypeResult: React.FunctionComponent<Props> = ({ triangle }) => {
  if (triangle === null) {
    return <div>Please fill all the fields</div>
  }

  if (!isValidTriangle(triangle)) {
    return <div>This is not a valid triangle</div>
  }

  const triangleType = determineTriangleType(triangle)

  return <div style={{ background: 'white' }}>{messages[triangleType]}</div>
}
