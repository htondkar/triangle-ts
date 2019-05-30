import React from 'react';

interface Props {
  triangleType?: string
  extraText?: string
}

export const TriangleTypeResultTitle: React.FunctionComponent<Props> = ({
  triangleType = '',
  extraText = '',
}) => (
  <span data-testid="triangle-type-result-title">
    <strong>{triangleType}</strong> {extraText}
  </span>
)
