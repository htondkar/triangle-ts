import React from 'react'
import TriangleTypeForm from './TriangleForm'
import TriangleTypeResult from './TriangleTypeResult'
import styled from 'styled-components'

const TriangleTypePageLayout = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`

export function TriangleType() {
  return (
    <TriangleTypePageLayout>
      <TriangleTypeForm />
      <TriangleTypeResult />
    </TriangleTypePageLayout>
  )
}
