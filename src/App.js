import React, { Component } from 'react';
import './App.css';
import Select from './components/Select'

// -----------------------------------------------------------------------------
//                        Date Generation Logic
// -----------------------------------------------------------------------------
const months = (
  'Month January February March April May June July August September October November December'
  .split(' ')
)

const days = ['Day'].concat([...Array(31+1).keys()].slice(1))

const getPastYears = yearsBack => {
  const currentYear = new Date().getFullYear()
  const years = [...Array(yearsBack + 1).keys()].map( num => currentYear - num)
  return years
}

const years = ['Year'].concat(getPastYears(120))

// -----------------------------------------------------------------------------
//                              Container
// -----------------------------------------------------------------------------
class App extends Component {
  state = {
    month: 0,
    day: 0,
    year: 0
  }

  handleInputChange = evt => {
    this.setState({[evt.target.id]: evt.target.value})
  }

  render() {
    return (
      <div>
        <Select
          name='Day'
          id='day'
          options={days}
          selected={this.state.day}
          onOptionChange={this.handleInputChange}
        />
        <Select
          name='Month'
          id='month'
          options={months}
          selected={this.state.month}
          onOptionChange={this.handleInputChange}
        />
        <Select
          name='Year'
          id='year'
          options={years}
          selected={this.state.year}
          onOptionChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
