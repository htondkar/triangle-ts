import React from 'react';

import { EquilateralTriangle } from './components/EquilateralTriangle';
import { IsoclinesTriangle } from './components/IsoclinesTriangle';
import { ScaleneTriangle } from './components/ScaleneTriangle';
import { TriangleTypeResultCard } from './components/TriangleTypeResultCard';
import { TriangleTypeResultTitle } from './components/TriangleTypeResultTitle';
import { Triangle, TriangleTypes } from './Triangle.model';
import { determineTriangleType } from './TriangleType.utils';
import { TriangleValidations } from './TriangleType.validations';

interface Props {
  triangle: Partial<Triangle> | null
}

export const TriangleTypeResult: React.FunctionComponent<Props> = ({ triangle }) => {
  if (triangle === null || !TriangleValidations.hasAllTheSides(triangle)) {
    return <TriangleTypeResultCard>{messages.incompleteInput}</TriangleTypeResultCard>
  }

  if (!TriangleValidations.passesTriangleInequalityTheoremTest(triangle)) {
    return <TriangleTypeResultCard>{messages.invalidInput}</TriangleTypeResultCard>
  }

  return (
    <TriangleTypeResultCard>
      {messages[determineTriangleType(triangle)]}
    </TriangleTypeResultCard>
  )
}

const messages = {
  [TriangleTypes.Equilateral]: (
    <React.Fragment>
      <TriangleTypeResultTitle triangleType="Equilateral" extraText="Triangle!" />
      <EquilateralTriangle />
    </React.Fragment>
  ),
  [TriangleTypes.Isosceles]: (
    <React.Fragment>
      <TriangleTypeResultTitle triangleType="Isosceles" extraText="Triangle!" />
      <IsoclinesTriangle />
    </React.Fragment>
  ),
  [TriangleTypes.Scalene]: (
    <React.Fragment>
      <TriangleTypeResultTitle triangleType="Scalene" extraText="Triangle!" />
      <ScaleneTriangle />
    </React.Fragment>
  ),
  invalidInput: <TriangleTypeResultTitle extraText="This is not a valid triangle!" />,
  incompleteInput: <TriangleTypeResultTitle extraText="Please fill all the fields" />,
}
