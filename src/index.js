import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './Components/App.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
