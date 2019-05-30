import React from 'react';

import { EquilateralTriangle } from './components/EquilateralTriangle';
import { IsoclinesTriangle } from './components/IsoclinesTriangle';
import { ScaleneTriangle } from './components/ScaleneTriangle';
import { TriangleTypeResultCard } from './components/TriangleTypeResultCard';
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
      <span>
        <strong>Equilateral</strong> Triangle!
      </span>
      <EquilateralTriangle />
    </React.Fragment>
  ),
  [TriangleTypes.Isosceles]: (
    <React.Fragment>
      <span>
        <strong>Isosceles</strong> Triangle!
      </span>
      <IsoclinesTriangle />
    </React.Fragment>
  ),
  [TriangleTypes.Scalene]: (
    <React.Fragment>
      <span>
        <strong>Scalene </strong> Triangle!
      </span>
      <ScaleneTriangle />
    </React.Fragment>
  ),
  invalidInput: <strong>This is not a valid triangle!</strong>,
  incompleteInput: <strong>Please fill all the fields</strong>,
}
