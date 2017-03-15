import { RECEIVE_POSTS, REQUEST_POSTS } from '../actions/index';

const INITIAL_STATE = { posts: [], page: 0, isLastPage: false, isFetching: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_POSTS: {
      const { isLastPage, posts, page } = action;
      return Object.assign(
        {},
        state,
        { posts: [...state.posts, ...posts], isLastPage, page, isFetching: false },
      );
    }
    case REQUEST_POSTS: {
      return { ...state, isFetching: true };
    }
    default:
      return state;
  }
}
