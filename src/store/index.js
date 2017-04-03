import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'seamless-immutable';

import reducers from './reducers';

export default initialState => (
  createStore(reducers, Immutable(initialState), composeWithDevTools(
    applyMiddleware(thunk),
  ))
);
