import React, { DetailedHTMLProps } from 'react'

interface Props extends DivProps {}

type DivProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Content: React.FunctionComponent<Props> = ({ children, ...rest }) => (
  <div data-ts="Content" {...rest}>
    {children}
  </div>
)
