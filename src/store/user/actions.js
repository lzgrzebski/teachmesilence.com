import * as types from './actionTypes';

export const addVisitedPost = slug => ({
  type: types.ADD_VISITED_POST,
  slug,
});

export const getVisitedPosts = slug => ({
  type: types.GET_VISITED_POSTS,
  visitedPosts: [slug],
});

export const requestRecommendedPosts = () => ({
  type: types.REQUEST_RECOMMENDED_POSTS,
});

export const receiveRecommendedPosts = () => ({
  type: types.RECEIVE_RECOMMENDED_POSTS,
});
