import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

// import configureStore from './store/configureStore'
import * as reducers from './Reducers'

import App from './App';
import Home from './Components/Home'
import Workout from './Components/Workout/Workout'
import './index.css';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer
})

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()

)

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/workout" component={Workout} />
      </Route>
    </Router>
  </Provider>
),document.getElementById('root'));
