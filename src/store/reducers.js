import { combineReducers } from 'redux';
import PostsReducer from './posts/reducer';
import HeaderReducer from './header/reducer';


const rootReducer = combineReducers({
  store: PostsReducer,
  header: HeaderReducer,
});

export default rootReducer;
