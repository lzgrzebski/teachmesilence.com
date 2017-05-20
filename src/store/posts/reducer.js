import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE = Immutable({
  posts: {},
  page: 0,
  isLastPage: false,
  isFetching: false,
  currentPost: null,
  activePost: null,
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
      const { posts, currentPost, activePost } = action;
      return state.merge({ posts, isFetching: false, currentPost, activePost }, { deep: true });
    }
    case types.SET_CURRENT_POST: {
      const { currentPost, activePost } = action;
      return state.merge({ currentPost, activePost });
    }
    case types.SET_ACTIVE_POST: {
      const { activePost } = action;
      return state.merge({ activePost });
    }
    case types.SET_RECOMMENDED_POSTS: {
      const { posts } = action;
      return state.merge({ posts }, { deep: true });
    }
    case types.RECEIVE_POSTS_LINKS: {
      const { posts } = action;
      return state.merge({ posts, isMenuLoaded: true }, { deep: true });
    }
    case types.SHARE_CLICK: {
      const { slug, shares, liked } = action;
      return state.merge({
        posts: {
          [slug]: {
            shares,
            liked,
          },
        },
      }, { deep: true });
    }
    case types.SET_SHARES_COUNT: {
      const { slug, shares, sharesLoaded } = action;
      return state.merge({
        posts: {
          [slug]: {
            shares,
            sharesLoaded,
          },
        },
      }, { deep: true });
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

export function getRecommendedPosts(state) {
  const { store: { currentPost }, user: { isDownloadedRecommendedPosts } } = state;
  const posts = getFullPosts(state);
  const filteredPosts = posts
    .filter(post => !state.user.visitedPosts.includes(post.slug) && post.slug !== currentPost)
    .slice(0, 3);
  if (filteredPosts.length) return filteredPosts;

  return isDownloadedRecommendedPosts ?
          posts.filter(post => post.slug !== currentPost).slice(0, 3) : [];
}
