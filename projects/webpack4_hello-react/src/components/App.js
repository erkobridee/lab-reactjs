import React, { Component } from 'react';

import styles from './App.scss';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>My react app running over the webpack 4.</h1>
      </div>
    );
  }
}

export default App;