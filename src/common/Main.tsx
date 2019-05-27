import React from 'react'

interface Props {}

export const Main: React.FunctionComponent<Props> = props => (
  <main data-ts="Main">{props.children}</main>
)
