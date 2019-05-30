import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  stroke: #00aeff;
  stroke-width: 2px;
  fill: none;
  width: 150px;
  height: auto;
`

export const SvgBase: React.FunctionComponent = props => {
  return <Svg viewBox="-10 -10 110 110">{props.children}</Svg>
}
