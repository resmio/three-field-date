import React from 'react'
import PropTypes from 'prop-types'

const Select = ({
  id,
  name,
  onOptionChange,
  options,
  selected,
  values
}) => (
  <select name={name} value={selected} onChange={onOptionChange} id={id} >
    <option value={0}>{name}</option>
    {
      options.map((option, i) => (
        <option key={i} value={values ? values[i] : option}>{option}</option>
      ))
    }
  </select>
)

Select.propTypes = {
  id: PropTypes.string
}

export default Select
