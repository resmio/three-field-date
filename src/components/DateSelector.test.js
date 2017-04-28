import React from 'react'
import ReactDOM from 'react-dom'
import DateSelector from './DateSelector'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DateSelector />, div)
})
