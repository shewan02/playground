import React, { Component } from 'react';
import './css/App.css';
import Clock from './components/Clock';

class App extends Component {

  handleClockClick(event) {
    console.log('You have tried to stop the time. You have failed.');
  }

  render() {
    return (
        <div>
          <Clock location="London" onClick = { this.handleClockClick } />
        </div>
    );
  }
}

export default App;
