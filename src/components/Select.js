import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { colors } from '@resmio/rollico/dist'

const field = (hasError) => css({
  background: colors.white,
  fontSize: '1em',
  height: '2.4em',
  color: colors.dustyGray,
  borderColor: hasError ? colors.amaranth : colors.dustyGray,
  ':focus': {
    outline: 'none'
  }
})

const Select = ({
  id,
  name,
  onOptionChange,
  options,
  selected,
  values,
  hasError
}) => (
  <select {...field(hasError)} name={name} value={selected} onChange={onOptionChange} id={id} >
    <option value={0}>{name}</option>
    {
      options.map((option, i) => (
        <option key={i} value={values ? values[i] : option}>{option}</option>
      ))
    }
  </select>
)

const {
  arrayOf,
  bool,
  func,
  number,
  oneOfType,
  string
} = PropTypes

Select.propTypes = {
  hasError: bool,
  id: string,
  name: string,
  onOptionChange: func.isRequired,
  options: arrayOf(oneOfType([string, number])).isRequired,
  selected: oneOfType([string,number]),
  values: arrayOf(oneOfType([string, number]))
}

export default Select
