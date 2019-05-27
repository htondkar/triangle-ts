import React, { DetailedHTMLProps } from 'react'

interface Props extends HtmlFormProps {}

type HtmlFormProps = DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

export const Form: React.FunctionComponent<Props> = props => {
  const { children, ...restProps } = props

  return (
    <form data-ts="Form" {...restProps}>
      {children}
    </form>
  )
}
