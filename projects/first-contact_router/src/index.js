import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// to use in this way you need to set the NODE_PATH=src
// look package.json scripts
// > available since create-react-app v0.4.0
// > https://github.com/facebookincubator/create-react-app/releases/tag/v0.4.0 
// import App from './App';
import App from 'App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
