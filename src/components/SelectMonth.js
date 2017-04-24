import React from 'react'

const months = (
  'Month January February March April May June July August September October November December'
  .split(' ')
)

const SelectMonth = ({selected, onOptionChange}) => (
  <select name='Month' value={selected} onChange={onOptionChange} >
    {
      months.map((month, i) => (
        <option key={i} value={i}>{month}</option>
      ))
    }
  </select>
)

export default SelectMonth