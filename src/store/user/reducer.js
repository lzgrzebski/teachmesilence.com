import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const INITIAL_STATE = Immutable({
  visitedPosts: [],
  isDownloadedRecommendedPosts: false,
  isFetchingRecommendedPosts: false,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_VISITED_POST: {
      const { slug } = action;
      return state.merge({ visitedPosts: [...new Set([...state.visitedPosts, slug])] });
    }
    case types.GET_VISITED_POSTS: {
      const { visitedPosts } = action;
      return state.merge({ visitedPosts: [...new Set([...state.visitedPosts, ...visitedPosts])] });
    }
    case types.REQUEST_RECOMMENDED_POSTS: {
      return state.merge({ isFetchingRecommendedPosts: true });
    }
    case types.RECEIVE_RECOMMENDED_POSTS: {
      return state.merge({ isFetchingRecommendedPosts: false, isDownloadedRecommendedPosts: true });
    }
    default:
      return state;
  }
}
