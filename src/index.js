import React from 'react'
import ReactDOM from 'react-dom'
import DateSelector from './components/DateSelector'

ReactDOM.render(
  <DateSelector
    date='2016-12-12'
    onChange={(val)=>{console.log(val)}}
    monthFirst
  />,
  document.getElementById('root')
);
