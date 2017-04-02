import * as types from './actionTypes';
import { getPosts, getSinglePost } from '../../services/api';

// check if we can fetch posts
function shouldFetchPosts(isLastPage, isFetching) {
  return !isLastPage && !isFetching;
}

// async action to establish connection and fetch posts
export const fetchPosts = (page = 0, isLastPage = false, isFetching = false) =>
  async (dispatch) => {
    if (shouldFetchPosts(isLastPage, isFetching)) {
      dispatch({ type: types.REQUEST_POSTS });
      const posts = await getPosts(page);
      return dispatch({ type: types.RECEIVE_POSTS, ...posts });
    }
    return false;
  };

// async action to establish connection and fetch single post
export const fetchSinglePost = slug => async (dispatch, getState) => {
  const { store: { posts } } = getState();
  if (!(posts[slug] && posts[slug].description)) {
    dispatch({ type: types.REQUEST_POSTS });
    const singlePost = await getSinglePost(slug);
    dispatch({ type: types.RECEIVE_POSTS, ...singlePost });
  }

  return dispatch({ type: types.SET_CURRENT_POST, currentPost: slug });
};

