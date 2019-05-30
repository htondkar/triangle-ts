import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils';

import { TriangleTypeForm } from './TriangleTypeForm';
import { TriangleTypePage } from './TriangleTypePage';
import { TriangleTypeResult } from './TriangleTypeResult';

describe('TriangleTypePage', () => {
  it('renders without crashing', () => {
    mount(<TriangleTypePage />)
  })

  it('renders the form and the results', () => {
    const wrapper = mount(<TriangleTypePage />)
    expect(wrapper.find(TriangleTypeForm)).toHaveLength(1)
    expect(wrapper.find(TriangleTypeResult)).toHaveLength(1)
  })

  it('should show the result of entering value into the inputs', () => {
    const container = document.createElement('div')

    // because enzyme does not support React hooks, react testing utils is used instead.
    act(() => {
      ReactDOM.render(<TriangleTypePage />, container)
    })

    const inputElements = container.querySelectorAll<HTMLInputElement>('input')

    // ─── ENTER FIRST SIDE OF TRIANGLE ────────────────────────────────

    inputElements[0].value = '10'

    act(() => {
      ReactTestUtils.Simulate.change(inputElements[0])
    })

    expect(
      container
        .querySelector('[data-testid="triangle-type-result-title"')!
        .textContent!.trim()
    ).toBe('Please fill all the fields')

    // ─── ENTER SECOND SIDE OF TRIANGLE ───────────────────────────────

    inputElements[1].value = '14'

    act(() => {
      ReactTestUtils.Simulate.change(inputElements[1])
    })

    expect(
      container
        .querySelector('[data-testid="triangle-type-result-title"')!
        .textContent!.trim()
    ).toBe('Please fill all the fields')

    // ─── ENTER THIRD SIDE OF TRIANGLE ───────────────────────────────

    inputElements[2].value = '8'

    act(() => {
      ReactTestUtils.Simulate.change(inputElements[2])
    })

    expect(
      container
        .querySelector('[data-testid="triangle-type-result-title"')!
        .textContent!.trim()
    ).toContain('Scalene')
  })
})
