import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';

import logo from './logo.svg';
import './App.css';

//----------------------------------------------------------------------------//
// @begin: redux logic

import { createStore } from 'redux';

const initalDefaultState = {
  count : 42
};

function reducer(state = initalDefaultState, action){
  return state;
}

const store = createStore(reducer);

// @end: redux logic
//----------------------------------------------------------------------------//

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
