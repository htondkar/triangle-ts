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
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`
const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 1rem;
`

export const TriangleTypeForm: React.FunctionComponent<Props> = props => {
  function createChangeHandlerFor(fieldName: TriangleSides) {
    return function(event: React.ChangeEvent<HTMLInputElement>) {
      props.onChange({
        ...props.values,
        [fieldName]: parseFloat(event.target.value),
      })
    }
  }

  const getValueFor = (fieldName: TriangleSides) =>
    props.values ? props.values[fieldName] || '' : ''

  return (
    <section>
      <Title>Determine Type Of Your Traingle</Title>
      <StyledForm>
        <Input
          name={TriangleSides.SIDE_ONE}
          value={getValueFor(TriangleSides.SIDE_ONE)}
          onChange={createChangeHandlerFor(TriangleSides.SIDE_ONE)}
          label="Side 1"
          placeholder="Length of Side 1"
          type="number"
          autoFocus
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
    </section>
  )
}
