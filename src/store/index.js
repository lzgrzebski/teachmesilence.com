import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'seamless-immutable';

import localStorage from './_middleware/localStorage';
import analytics from './_middleware/analytics';
import reducers from './reducers';

export default (initialState) => {
  const store = createStore(reducers, Immutable(initialState), composeWithDevTools(
    applyMiddleware(thunk, localStorage, analytics),
  ));
  return store;
};
