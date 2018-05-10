import React, { Component } from 'react';

import Counter from './Counter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First React + Redux concat : a dumb test</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
