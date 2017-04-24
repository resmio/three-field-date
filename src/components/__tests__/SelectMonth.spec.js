import React from 'react'
import renderer from 'react-test-renderer'

import SelectMonth from '../SelectMonth'

describe('SelectMonth', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectMonth />)
    expect(tree).toMatchSnapshot()
  })

  it('renders the selected value passed as a prop', () => {
    const tree = renderer.create(<SelectMonth selected={3}/>)
    const fourthElementSelected = typeof tree.toJSON().children[3].selected !== 'undefined'
    expect(fourthElementSelected).toBe(true)
  })
  it('should fire the onOptionChange prop passing the value selected')
  it('should give an error if I enter an invalid date')
})
