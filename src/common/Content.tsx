import React from 'react'

interface Props {}

export const Content: React.FunctionComponent<Props> = props => (
  <section data-ts="MainContent">{props.children}</section>
)
