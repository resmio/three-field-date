import '@resmio/rollico/dist/rollico.css'
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { colors } from '@resmio/rollico/dist'

const field = css({
  background: colors.white,
  fontSize: '1em',
  height: '2.4em',
  color: colors.dustyGray,
  flexBasis: '32%'
})

const Select = ({
  id,
  name,
  onOptionChange,
  options,
  selected,
  values
}) => (
  <select {...field} name={name} value={selected} onChange={onOptionChange} id={id} >
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
