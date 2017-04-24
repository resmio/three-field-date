import React, { Component } from 'react';
import './App.css';
import SelectMonth from './components/SelectMonth'

class App extends Component {
  state = {
    selected: 3
  }

  handleSelectionChange =(evt) => {
    this.setState({selected: evt.target.value})
  }

  render() {
    return (
      <div className="App">
        <SelectMonth selected={this.state.selected} onOptionChange={this.handleSelectionChange}/>
      </div>
    );
  }
}

export default App;
