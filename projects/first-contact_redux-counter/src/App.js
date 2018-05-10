import React, { Component } from 'react';
import { Provider } from 'react-redux';

import reduxStore from './reduxLogic';

import Counter from './Counter';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">First React + Redux concat : a dumb test</h1>
          </header>
          <Counter count={42} />
        </div>
      </Provider>
    );
  }
}

export default App;
