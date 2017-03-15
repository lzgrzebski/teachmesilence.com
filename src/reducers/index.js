import { combineReducers } from 'redux';
import PostsReducer from './posts';

const rootReducer = combineReducers({
  store: PostsReducer,
});

export default rootReducer;
