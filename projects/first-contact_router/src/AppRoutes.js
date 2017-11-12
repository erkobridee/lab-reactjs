import React from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';


import Home from 'pages/Home';
import About from 'pages/About';
import Topics from 'pages/Topics';


const PagesLinks = () => (
  <div>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/topics">Topics</Link>
  </div>
);

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
);

const AppRoutes = () => (
  <Router>
    <div>
      <PagesLinks />
      <hr />
      <Routes />
    </div>
  </Router>
);

export default AppRoutes;