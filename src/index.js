import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
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

// TODO: REMOVE DEV TOOLS FROM PROD ANY BUILDS
const middleware = routerMiddleware(browserHistory)
const persistedState = loadState()
const store = createStore(
  reducer,
  persistedState,
  window.devToolsExtension && window.devToolsExtension()
)

store.subscribe(() => {
  console.log('Store Changed', store.getState());
})

// Save state object to localStorage every second
store.subscribe(throttle() => {
  saveState(
    store.getState()
  )
}, 1000)

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
