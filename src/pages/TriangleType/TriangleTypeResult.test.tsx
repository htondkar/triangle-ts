import { mount } from 'enzyme';
import React from 'react';

import {
    sampleEquilateralTriangle, sampleIsoclinesTriangle, sampleScaleneTriangle
} from './__fixtures__/sampleTriangles';
import { TriangleTypeResultTitle } from './components/TriangleTypeResultTitle';
import { TriangleTypeResult } from './TriangleTypeResult';

describe('TriangleTypeResult', () => {
  it('should show the correct output when there is no input', () => {
    const wrapper = mount(<TriangleTypeResult triangle={null} />)
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toBe('Please fill all the fields')
  })

  it('should show the correct output when input is incomplete', () => {
    const wrapper = mount(<TriangleTypeResult triangle={{ sideOne: 10 }} />)
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toBe('Please fill all the fields')
  })

  it('should show the correct output when input is not a valid triangle', () => {
    const wrapper = mount(
      <TriangleTypeResult triangle={{ sideOne: 10, sideTwo: 800, sideThree: 2 }} />
    )
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toBe('This is not a valid triangle!')
  })

  it('should show the correct output with valid Equilateral input', () => {
    const wrapper = mount(<TriangleTypeResult triangle={sampleEquilateralTriangle} />)
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toContain('Equilateral')
  })

  it('should show the correct output with valid Isosceles input', () => {
    const wrapper = mount(<TriangleTypeResult triangle={sampleIsoclinesTriangle} />)
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toContain('Isosceles')
  })

  it('should show the correct output with valid Scalene input', () => {
    const wrapper = mount(<TriangleTypeResult triangle={sampleScaleneTriangle} />)
    const resultTitle = wrapper.find(TriangleTypeResultTitle)
    expect(resultTitle.text().trim()).toContain('Scalene')
  })
})
