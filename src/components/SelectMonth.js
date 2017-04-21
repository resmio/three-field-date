import React from 'react'

const months = (
  'Month January February March April May June July August September October November December'
  .split(' ')
)

export default ({}) => (
  <select name='Month'>
    {
      months.map((month, i) => (
        <option key={i} value={i}>{month}</option>
      ))
    }
  </select>
)
