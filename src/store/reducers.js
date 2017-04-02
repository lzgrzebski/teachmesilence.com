import { combineReducers } from 'redux';
import PostsReducer from './posts/reducer';

const rootReducer = combineReducers({
  store: PostsReducer,
});

export default rootReducer;
