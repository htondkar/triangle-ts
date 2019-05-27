import React, { DetailedHTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HtmlFormProps {}

type HtmlFormProps = DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

export const Form: React.FunctionComponent<Props> = styled.form.attrs({
  'data-ts': 'Form',
})`
  background: white;
  margin: 0;

  & > * {
    padding-top: 0 !important;
  }
`
