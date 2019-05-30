import React from 'react';

import { Input } from '../../common/Input';
import { Title } from '../../common/Title';
import { TriangleStyledForm } from './components/TriangleStyledForm';
import { Triangle, TriangleSides } from './Triangle.model';

interface Props {
  values: Partial<Triangle> | null
  onChange: (triangle: Partial<Triangle>) => void
}

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
      <Title>Determine The Type Of Your Triangle</Title>
      <TriangleStyledForm>
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
      </TriangleStyledForm>
    </section>
  )
}
