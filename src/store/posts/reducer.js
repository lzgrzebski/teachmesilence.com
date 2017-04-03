import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE = Immutable({
  posts: {},
  page: 0,
  isLastPage: false,
  isFetching: false,
  currentPost: null,
  activePost: null,
  isMenuOpen: false,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_POSTS: {
      return state.merge({ isFetching: true });
    }
    case types.RECEIVE_POSTS: {
      const { isLastPage, posts, page } = action;
      return state.merge({ posts, isLastPage, page, isFetching: false }, { deep: true });
    }
    case types.SET_CURRENT_POST: {
      const { currentPost } = action;
      return state.merge({ currentPost });
    }
    default:
      return state;
  }
}

// SELECTORS //
export function getCurrentPost(state) {
  const { store: { posts, currentPost } } = state;
  return posts[currentPost];
}
