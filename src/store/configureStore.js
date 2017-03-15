import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

export default initialState => (
  createStore(reducers, initialState, applyMiddleware(thunk))
);
