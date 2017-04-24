import React from 'react'

const Select = ({options, name, id, selected, transformValue, onOptionChange}) => (
  <select name={name} value={selected} onChange={onOptionChange} id={id} >
    {
      options.map((option, i) => (
        <option key={i} value={i}>{option}</option>
      ))
    }
  </select>
)

export default Select
