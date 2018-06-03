import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test="counter-display">Counter: {this.state.counter}</h1>
        <button 
            data-test="increment-button"
            onClick={()=>this.setState({counter:this.state.counter + 1})}>Increment counter</button>

            <button 
                data-test = "reset-button"
                onClick={()=>this.setState({counter:0})}>Reset</button>
      </div>
    );
  }
}

export default App;
