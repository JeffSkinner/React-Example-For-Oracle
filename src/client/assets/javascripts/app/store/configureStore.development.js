import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from '../reducer';
import DevTools from '../DevTools';

/**
 * Entirely optional.
 * This tiny library adds some functionality to your DevTools,
 * by logging actions/state to your console. Used in conjunction
 * with your standard DevTools monitor gives you great flexibility.
 */
const logger = createLogger();


const middlewares = [promiseMiddleware, logger, require('redux-immutable-state-invariant')()];

// By default we try to read the key from ?debug_session=<key> in the address bar
const getDebugSessionKey = function () {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length) ? matches[1] : null;
};

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

export default function configureStore(initialState) {

  /*  Get data from local storage if it exists, otherwise use initial state */
  const persistedState = localStorage.getItem('persistDevState') ? JSON.parse(localStorage.getItem('persistDevState')) : initialState;

  const store = createStore(rootReducer, persistedState, enhancer);

  /*  Subscribe to store updates */
  store.subscribe(() => {
    let state = store.getState().sharedModel;

    /*  Conditions to store the updates to local storage */
    if (state.skill.length >= 3 && state.level >= 0) {
      localStorage.setItem('persistDevState', JSON.stringify(store.getState()));
    }
  });

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
