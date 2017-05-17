import { combineReducers } from 'redux';
import PostsReducer from './posts/reducer';
import HeaderReducer from './header/reducer';
import UserReducer from './user/reducer';


const rootReducer = combineReducers({
  store: PostsReducer,
  header: HeaderReducer,
  user: UserReducer,
});

export default rootReducer;
