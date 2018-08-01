import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Views/Home';
import About from './Views/About';
import Websites from './Views/Websites';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='about' component={About} />
        <Route path='websites' component={Websites} />
        <Route path='*' component={Home} />
      </Router>
    )
  }
}

export default App