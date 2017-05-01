import React, { Component } from 'react'
import '@resmio/rollico/dist/rollico.css'
import {css, merge, select as $} from 'glamor'

import { colors } from '@resmio/rollico/dist'

import {
  getDayFromDate,
  getMonthFromDate,
  getPastYears,
  getYearFromDate,
  MONTH_NAMES
} from '../libs/dates'

import Select from './Select'

const container = css({
  display: 'flex',
  justifyContent: 'space-between'
})

const margins = $(
  '& select:first-of-type + select',
  {
    marginRight: '.3em',
    marginLeft: '.3em'
  }
)

const error = css({
  fontSize: '0.9em',
  color: colors.amaranth
})

// -----------------------------------------------------------------------------
//                        Date Generation Logic
// -----------------------------------------------------------------------------

const days = [...Array(31+1).keys()].slice(1)
const actualYear = getYearFromDate(new Date())
const years = getPastYears(actualYear, 120)

// -----------------------------------------------------------------------------
//                                Validations
// -----------------------------------------------------------------------------
const isValidDate = (date) => {
  const testDate = new Date(date.year, date.month - 1, date.day)
  return (
    testDate.getDate() === date.day
    && testDate.getMonth() === date.month - 1
    && testDate.getFullYear() === date.year
  )
}

const validate = (date) => {
  const errors = {}
  if (date.day === 0) { errors.day = true }
  if (date.month === 0) { errors.month = true }
  if (date.year === 0) { errors.year = true }
  if (!isValidDate(date)) { errors.invalid = true }
  return errors
}

// -----------------------------------------------------------------------------
//                              Container
// -----------------------------------------------------------------------------

// props:
//  - date
//  - monthFirst :Boolean
//  - date getter (onChange)

class DateSelector extends Component {
  state = {
    date: {
      month: -1,
      day: 0,
      year: 0
    },
    errors: {
    }
  }

  handleInputChange = evt => {
    const date = this.state.date
    date[evt.target.id] = parseInt(evt.target.value, 10)
    const errors = validate(date)
    this.setState({date, errors})
  }

  // getSelectedYear = () => this.state.date.year - getYearFromDate(new Date()) + 1

// If we get a date as a prop we assign it to the state
  componentWillMount() {
    this.props.date && this.setState({
      date: {
        day: getDayFromDate(this.props.date),
        // Month is 0 based so we need to add 1 here
        month: getMonthFromDate(this.props.date) + 1,
        year: getYearFromDate(this.props.date)
      }
    })
  }

  // // Emit the state up after it changes
  componentDidUpdate() {
    this.props.onChange(this.state)
  }

  render() {
    const day = (
      <Select
        name='Day'
        id='day'
        options={days}
        selected={this.state.date.day}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.day}
      />
    )
    const month = (
      <Select
        name='Month'
        id='month'
        options={MONTH_NAMES}
        values={[...Array(13).keys()].slice(1)}
        selected={this.state.date.month}
        onOptionChange={this.handleInputChange}
        hasError={this.state.errors.month}
      />
    )

    return (
      <div>
        <div {...merge(container, margins)}>
          { this.props.monthFirst ? month : day }
          { this.props.monthFirst ? day : month }
          <Select
            name='Year'
            id='year'
            options={years}
            selected={this.state.date.year}
            onOptionChange={this.handleInputChange}
            hasError={this.state.errors.year}
            optionsAsValues
          />
        </div>
        <div {...error}>{ this.state.errors.invalid && 'Please provide a valid date' }</div>
      </div>
    );
  }
}

export default DateSelector
