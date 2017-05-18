import * as types from './actionTypes';
import * as headerActions from '../header/actions';
import * as userActions from '../user/actions';
import { getPosts, getSinglePost, getMenu, getRecommendedPosts } from '../../services/api';

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
    dispatch({
      type: types.RECEIVE_SINGLE_POST,
      ...singlePost,
      currentPost: slug,
      activePost: slug,
    });
  } else {
    dispatch({ type: types.SET_CURRENT_POST, currentPost: slug, activePost: slug });
  }
};

// async action to fetch menu links data
export const fetchMenu = () => async (dispatch, getState) => {
  const { store: { isMenuLoaded, isMenuOpen } } = getState();
  const menuState = !isMenuOpen;
  dispatch(headerActions.menuClick(menuState));

  if (menuState && !isMenuLoaded) {
    const posts = await getMenu();
    dispatch({ type: types.RECEIVE_POSTS_LINKS, ...posts });
  }
};

// async action to recommended posts
export const fetchRecommendedPosts = visitedPosts => async (dispatch) => {
  dispatch(userActions.requestRecommendedPosts());

  const posts = await getRecommendedPosts(visitedPosts.join(','));
  dispatch(userActions.receiveRecommendedPosts());
  dispatch({ type: types.SET_RECOMMENDED_POSTS, ...posts });
};

export const setActivePost = activePost => dispatch => (
  dispatch({ type: types.SET_ACTIVE_POST, activePost })
);

export const shareClick = (slug, shares, liked) => ({
  type: types.SHARE_CLICK,
  slug,
  shares: liked ? shares - 1 : shares + 1,
  liked: !liked,
});
