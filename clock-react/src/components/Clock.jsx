import React, { Component } from 'react';
import '../css/Clock.css';

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.refresh();
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  refresh() {
    this.timerID = setTimeout(() => {
      this.tick();
      this.refresh();
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Updated');
  }

  render() {
    const { location, onClick } = this.props;
    return (
      <div onClick = { onClick } >
        <h1>Time in { location }:</h1>
        <h2>{this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
