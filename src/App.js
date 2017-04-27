import React, { Component } from 'react';
import './App.css';
import Select from './components/Select'

// -----------------------------------------------------------------------------
//                        Date Generation Logic
// -----------------------------------------------------------------------------
const months = (
  'January February March April May June July August September October November December'
  .split(' ')
)

const days = [...Array(31+1).keys()].slice(1)

const getPastYears = yearsBack => {
  const currentYear = new Date().getFullYear()
  const years = [...Array(yearsBack + 1).keys()].map(num => currentYear - num)
  return years
}

const years = getPastYears(120)

const getDayFromDate = date => new Date(date).getDate()
const getMonthFromDate = date => new Date(date).getMonth()
const getYearFromDate = date => new Date(date).getFullYear()

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
//  - format
//  - date getter (onChange)

class App extends Component {
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
      />
    )
    const month = (
      <Select
        name='Month'
        id='month'
        options={months}
        values={[...Array(13).keys()].slice(1)}
        selected={this.state.date.month}
        onOptionChange={this.handleInputChange}
      />
    )

    return (
      <div>
        { this.props.monthFirst ? month : day }
        { this.props.monthFirst ? day : month }
        <Select
          name='Year'
          id='year'
          options={years}
          selected={this.state.date.year}
          onOptionChange={this.handleInputChange}
          optionsAsValues
        />
        <span style={{ color: 'red' }}>{ this.state.errors.day && 'Day required' }</span>
        <span style={{ color: 'red' }}>{ this.state.errors.month && 'Month required' }</span>
        <span style={{ color: 'red' }}>{ this.state.errors.year && 'Year required' }</span>
        <span style={{ color: 'red' }}>{ this.state.errors.invalid && 'Invalid Date' }</span>
      </div>
    );
  }
}

export default App
