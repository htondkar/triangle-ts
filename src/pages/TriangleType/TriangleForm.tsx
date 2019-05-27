import React from 'react'
import { Form } from '../../common/Form'
import { Input } from '../../common/Input'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export default function TriangleTypeForm() {
  return (
    <StyledForm>
      <Input label="Side 1" placeholder="Length of Side 1" type="number" />
      <Input label="Side 2" placeholder="Length of Side 1" type="number" />
      <Input label="Side 3" placeholder="Length of Side 1" type="number" />
    </StyledForm>
  )
}
