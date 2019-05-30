import { mount } from 'enzyme';
import React from 'react';

import { Input } from '../../common/Input';
import { TriangleTypeForm } from './TriangleTypeForm';

describe('TriangleTypeForm', () => {
  it('should render without crashing', () => {
    mount(<TriangleTypeForm values={null} onChange={() => {}} />)
  })

  it('should render an input field for each triangle side', () => {
    const wrapper = mount(<TriangleTypeForm values={null} onChange={() => {}} />)
    expect(wrapper.find(Input)).toHaveLength(3)
  })

  it('should accept initial values', () => {
    const wrapper = mount(
      <TriangleTypeForm
        values={{ sideOne: 10, sideTwo: 9, sideThree: 8 }}
        onChange={() => {}}
      />
    )
    const inputs = wrapper.find(Input)

    expect(
      inputs
        .at(0)
        .find('input')
        .getDOMNode<HTMLInputElement>().value
    ).toBe('10')

    expect(
      inputs
        .at(1)
        .find('input')
        .getDOMNode<HTMLInputElement>().value
    ).toBe('9')

    expect(
      inputs
        .at(2)
        .find('input')
        .getDOMNode<HTMLInputElement>().value
    ).toBe('8')
  })

  it('should handle change correctly', () => {
    const handleChange = jest.fn()
    const wrapper = mount(<TriangleTypeForm values={null} onChange={handleChange} />)

    wrapper
      .find(Input)
      .at(0)
      .find('input')
      .simulate('change', { target: { name: 'sideOne', value: '10' } })

    wrapper
      .find(Input)
      .at(1)
      .find('input')
      .simulate('change', { target: { name: 'sideTwo', value: '9' } })

    wrapper
      .find(Input)
      .at(2)
      .find('input')
      .simulate('change', { target: { name: 'sideThree', value: '8' } })

    expect(handleChange).toHaveBeenCalledTimes(3)

    expect(handleChange.mock.calls[0][0]).toEqual({
      sideOne: 10,
    })

    expect(handleChange.mock.calls[1][0]).toEqual({
      sideTwo: 9,
    })

    expect(handleChange.mock.calls[2][0]).toEqual({
      sideThree: 8,
    })
  })

  it('should respect initial values when handling change', () => {
    const handleChange = jest.fn()
    const wrapper = mount(
      <TriangleTypeForm values={{ sideOne: 10 }} onChange={handleChange} />
    )

    wrapper
      .find(Input)
      .at(1)
      .find('input')
      .simulate('change', { target: { name: 'sideTwo', value: '9' } })

    expect(handleChange).toHaveBeenCalledTimes(1)

    expect(handleChange.mock.calls[0][0]).toEqual({
      sideOne: 10,
      sideTwo: 9,
    })
  })
})
