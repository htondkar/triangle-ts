import React from 'react';
import styled from 'styled-components';

import { Form } from '../../common/Form';
import { Input } from '../../common/Input';
import { Triangle, TriangleSides } from './Triangle.model';

interface Props {
  values: Partial<Triangle> | null
  onChange: (triangle: Partial<Triangle>) => void
}

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export const TriangleTypeForm: React.FunctionComponent<Props> = ({
  values,
  onChange,
}) => {
  function createChangeHandlerFor(fieldName: TriangleSides) {
    return function(event: React.ChangeEvent<HTMLInputElement>) {
      onChange({
        ...values,
        [fieldName]: parseFloat(event.target.value),
      })
    }
  }

  const getValueFor = (fieldName: TriangleSides) =>
    values ? values[fieldName] || '' : ''

  return (
    <StyledForm>
      <Input
        name={TriangleSides.SIDE_ONE}
        value={getValueFor(TriangleSides.SIDE_ONE)}
        onChange={createChangeHandlerFor(TriangleSides.SIDE_ONE)}
        label="Side 1"
        placeholder="Length of Side 1"
        type="number"
      />

      <Input
        name={TriangleSides.SIDE_TWO}
        value={getValueFor(TriangleSides.SIDE_TWO)}
        onChange={createChangeHandlerFor(TriangleSides.SIDE_TWO)}
        label="Side 2"
        placeholder="Length of Side 1"
        type="number"
      />

      <Input
        name={TriangleSides.SIDE_THREE}
        value={getValueFor(TriangleSides.SIDE_THREE)}
        onChange={createChangeHandlerFor(TriangleSides.SIDE_THREE)}
        label="Side 3"
        placeholder="Length of Side 1"
        type="number"
      />
    </StyledForm>
  )
}
