import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App
    date='2016-12-12'
    onChange={(val)=>{console.log(val)}}
    monthFirst
  />,
  document.getElementById('root')
);
