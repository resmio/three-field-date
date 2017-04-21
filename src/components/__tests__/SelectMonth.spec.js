import React from 'react'
import renderer from 'react-test-renderer'
import SelectMonth from '../SelectMonth'

describe('SelectMonth', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectMonth />)
    expect(tree).toMatchSnapshot()
  })

  it('should fire the onOptionChange prop passing the value selected')
})
