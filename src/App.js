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
  const years = [...Array(yearsBack + 1).keys()].map( num => currentYear - num)
  return years
}

const years = getPastYears(120)

const getDayFromDate = date => new Date(date).getDate()
const getMonthFromDate = date => new Date(date).getMonth() + 1
const getYearFromDate = date => new Date(date).getFullYear()

const isValidDate = (day, month, year) => {
  const testDate = new Date(year, month, day)
  return (
    testDate.getDate() === day
    && testDate.getMonth() === month - 1
    && testDate.getFullYear === year
  )
}

// props:
// date
// format
// date getter (onChange)

// -----------------------------------------------------------------------------
//                              Container
// -----------------------------------------------------------------------------
class App extends Component {
  state = {
    month: -1,
    day: 0,
    year: 0,
    isValid: false
  }

  handleYearChange = evt => {
    const newYear = parseInt(evt.target.value)
    this.setState({
      year: newYear,
      isValid: isValidDate(this.state.day, this.state.month, newYear)
    })
    this.props.onChange(this.state)
  }

  handleMonthChange = evt => {
    const newMonth = parseInt(evt.target.value, 10) - 1
    this.setState({
      month: newMonth,
      isValid: isValidDate(this.state.day, newMonth, this.state.year)
    })
    this.props.onChange(this.state)
  }

  handleDayChange = evt => {
    const newDay = parseInt(evt.target.value, 10)
    this.setState({
      day: newDay,
      isValid: isValidDate(newDay, this.state.month, this.state.year)
    })
    this.props.onChange(this.state)
  }

  getSelectedYear = () => this.state.year - getYearFromDate(new Date()) + 1

  componentWillMount() {
    this.props.date && this.setState({
      day: getDayFromDate(this.props.date),
      month: getMonthFromDate(this.props.date),
      year: getYearFromDate(this.props.date)
    })
  }

  render() {
    return (
      <div>
        <Select
          name='Day'
          id='day'
          options={days}
          selected={this.state.day}
          onOptionChange={this.handleDayChange}
        />
        <Select
          name='Month'
          id='month'
          options={months}
          values={[...Array(12).keys()].slice(1)}
          selected={this.state.month + 1}
          onOptionChange={this.handleMonthChange}
        />
        <Select
          name='Year'
          id='year'
          options={years}
          selected={this.state.year}
          onOptionChange={this.handleYearChange}
          optionsAsValues
        />
      </div>
    );
  }
}

export default App
