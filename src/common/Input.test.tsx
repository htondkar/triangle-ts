import { mount, shallow } from 'enzyme';
import React from 'react';

import { Input } from './Input';

describe('Input', () => {
  it('Should render without crashing', () => {
    shallow(<Input label="" />)
  })

  it('Should render label and an input field', () => {
    const wrapper = mount(<Input label="test" type="text" />)
    const inputLabel = wrapper.find('label')
    const inputField = wrapper.find('input[type="text"]')

    expect(inputLabel).toHaveLength(1)
    expect(inputField).toHaveLength(1)

    expect(inputLabel.text().trim()).toBe('test')
  })

  it('Should accept initial value', () => {
    const wrapper = mount(
      <Input label="test" type="text" value="test" onChange={console.log} />
    )
    const inputField = wrapper.find('input[type="text"]')
    const fieldValue = inputField.getDOMNode<HTMLInputElement>().value

    expect(fieldValue).toBe('test')
  })

  it('Should call the onChange method when change happens', () => {
    const changeHandler = jest.fn()
    const wrapper = mount(
      <Input label="test" type="text" value="test" onChange={changeHandler} />
    )

    const inputField = wrapper.find('input[type="text"]')
    inputField.simulate('change', 'CHANGED')

    expect(changeHandler).toHaveBeenCalledTimes(1)
  })
})
