import React from 'react';
import styled from 'styled-components';

import { Card } from '../../common/Card';
import { EquilateralTriangle } from './components/EquilateralTriangle';
import { IsoclinesTriangle } from './components/IsoclinesTriangle';
import { ScaleneTriangle } from './components/ScaleneTriangle';
import { Triangle, TriangleTypes } from './Triangle.model';
import { determineTriangleType } from './TriangleType.utils';
import { TriangleValidations } from './TriangleType.validations';

interface Props {
  triangle: Partial<Triangle> | null
}

const ResultCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 250px;
  overflow: auto;
`

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
  invalidInput: <React.Fragment>This is not a valid triangle</React.Fragment>,
  incompleteInput: <React.Fragment>Please fill all the fields</React.Fragment>,
}

export const TriangleTypeResult: React.FunctionComponent<Props> = ({ triangle }) => {
  if (triangle === null || !TriangleValidations.hasAllTheSides(triangle)) {
    return <ResultCard>{messages.incompleteInput}</ResultCard>
  }

  if (!TriangleValidations.passesTriangleInequalityTheoremTest(triangle)) {
    return <ResultCard>{messages.invalidInput}</ResultCard>
  }

  return <ResultCard>{messages[determineTriangleType(triangle)]}</ResultCard>
}
