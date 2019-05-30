import { mount, shallow } from 'enzyme';
import React from 'react';

import { Form } from './Form';

describe('Form', () => {
  it('Should render without crashing', () => {
    shallow(<Form />)
  })

  it('Should render exactly one form element', () => {
    const wrapper = mount(<Form />)
    const form = wrapper.find('form')
    expect(form.length).toBe(1)
  })

  it('Should have data-ts="Form" attribute', () => {
    const wrapper = mount(<Form />)
    const form = wrapper.find('form')
    expect(form.prop('data-ts')).toBe('Form')
  })
})
