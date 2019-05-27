import React from 'react';
import styled from 'styled-components';

import { Form } from '../../common/Form';
import { Input } from '../../common/Input';
import { Triangle } from './Triangle.mode';

interface Props {
  onInputChange: (triangle: Triangle) => void
}

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export const TriangleTypeForm: React.FunctionComponent<Props> = props => {
  return (
    <StyledForm>
      <Input label="Side 1" placeholder="Length of Side 1" type="number" />
      <Input label="Side 2" placeholder="Length of Side 1" type="number" />
      <Input label="Side 3" placeholder="Length of Side 1" type="number" />
    </StyledForm>
  )
}
