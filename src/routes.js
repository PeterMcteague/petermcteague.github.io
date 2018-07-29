import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Websites from './Components/Views/Websites';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='websites' component={Websites} />
    <Route path='*' component={Home} />
  </Route>
);