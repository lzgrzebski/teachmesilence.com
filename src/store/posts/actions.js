import * as types from './actionTypes';
import { getPosts, getSinglePost, getMenu } from '../../services/api';

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
    dispatch({ type: types.REQUEST_SINGLE_POST });
    const singlePost = await getSinglePost(slug);
    dispatch({ type: types.RECEIVE_SINGLE_POST, ...singlePost });
  }
  return dispatch({ type: types.SET_CURRENT_POST, currentPost: slug });
};

// async action to fetch menu links data
export const fetchMenu = () => async (dispatch, getState) => {
  const { store: { isMenuLoaded, isMenuOpen } } = getState();
  const menuState = !isMenuOpen;
  dispatch({ type: types.MENU_CLICK, isMenuOpen: menuState });

  if (menuState && !isMenuLoaded) {
    const posts = await getMenu();
    dispatch({ type: types.MENU_RECEIVE, ...posts });
  }
};

export const setActivePost = activePost => dispatch => (
  dispatch({ type: types.SET_ACTIVE_POST, activePost })
);




