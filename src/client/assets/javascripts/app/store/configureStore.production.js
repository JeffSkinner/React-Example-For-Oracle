import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducer';

const enhancer = compose(
  applyMiddleware(promiseMiddleware)
)(createStore);

export default function configureStore(initialState) {

   /*  Get data from local storage if it exists, otherwise use initial state */
  const persistedState = localStorage.getItem('persistProdState') ? JSON.parse(localStorage.getItem('persistProdState')) : initialState;

  const store = createStore(rootReducer, persistedState, enhancer);

  /*  Subscribe to store updates */
  store.subscribe(() => {
    let state = store.getState().sharedModel;

    /*  Conditions to store the updates to local storage */
    if (state.skill.length >= 3 && state.level >= 0) {
      localStorage.setItem('persistProdState', JSON.stringify(store.getState()));
    }
  });

  return store;
}
