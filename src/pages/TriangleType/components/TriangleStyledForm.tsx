import styled from 'styled-components';

import { Form } from '../../../common/Form';

export const TriangleStyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`
