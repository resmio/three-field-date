import React from 'react'
import { shallow } from 'enzyme'
import Option from '../Option'

describe('Option', () => {
  it('should render an `option` element', () => {
    const wrapper = shallow(
      <Option name/>
    )
    expect(
      wrapper.containsMatchingElement(<option />)
    ).toBe(true)
  })
})
