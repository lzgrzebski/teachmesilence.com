import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'seamless-immutable';

import localStorage from './_middleware/localStorage';
import reducers from './reducers';

export default (initialState) => {
  const store = createStore(reducers, Immutable(initialState), composeWithDevTools(
    applyMiddleware(thunk, localStorage),
  ));
  return store;
};
