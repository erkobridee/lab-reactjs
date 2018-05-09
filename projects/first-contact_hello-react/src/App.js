import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import CountSeconds from './components/CountSeconds';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First contact : Hello React!</h1>
        </header>
        <div className="App-intro">
          <Hello/>
          <Hello name="Erko Bridee"/>
          <br/>
          <CountSeconds/>
        </div>
      </div>
    );
  }
}

export default App;
