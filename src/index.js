import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'

import App from './App';
import Home from './Components/Home'
import Workout from './Components/Workout/Workout'
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/workout" component={Workout} />
    </Route>
  </Router>
),document.getElementById('root'));
