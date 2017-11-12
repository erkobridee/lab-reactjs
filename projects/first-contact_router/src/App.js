import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import AppRoutes from 'AppRoutes';

const Intro = () => (
  <p className="App-intro">
    Router content bellow:
  </p>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">First contact with react router</h1>
        </header>
        <Intro/>
        <AppRoutes />
      </div>
    );
  }
}

export default App;
