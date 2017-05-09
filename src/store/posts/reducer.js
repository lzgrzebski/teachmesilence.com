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
  isMenuLoaded: false,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_POSTS:
    case types.REQUEST_SINGLE_POST: {
      return state.merge({ isFetching: true });
    }
    case types.RECEIVE_POSTS: {
      const { isLastPage, posts, page } = action;
      return state.merge({ posts, isLastPage, page, isFetching: false }, { deep: true });
    }
    case types.RECEIVE_SINGLE_POST: {
      const { posts } = action;
      return state.merge({ posts, isFetching: false }, { deep: true });
    }
    case types.SET_CURRENT_POST: {
      const { currentPost } = action;
      return state.merge({ currentPost });
    }
    case types.SET_ACTIVE_POST: {
      const { activePost } = action;
      return state.merge({ activePost });
    }
    case types.MENU_CLICK: {
      return state.merge({ isMenuOpen: !state.isMenuOpen });
    }
    case types.MENU_RECEIVE: {
      const { posts } = action;
      return state.merge({ posts, isMenuLoaded: true }, { deep: true });
    }
    default:
      return state;
  }
}

// SELECTORS //
function getPostsValues(state) {
  const { store: { posts } } = state;
  return Object.values(posts);
}

export function getFullPosts(state) {
  const posts = getPostsValues(state);
  return posts.filter(post => post.description);
}

export function getCurrentPost(state) {
  const { store: { posts, currentPost } } = state;
  return posts[currentPost];
}

export function getMenuLinks(state) {
  const posts = getPostsValues(state);
  return posts.map(
    ({ slug, title }) => ({ slug, title }),
  );
}
