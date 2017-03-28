import callApi from '../services/api';

// when request posts
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

// when received posts
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = (posts, isLastPage, page) => ({
  type: RECEIVE_POSTS,
  posts,
  page,
  isLastPage,
});

// check if we can fetch posts
function shouldFetchPosts(isLastPage, isFetching) {
  return !isLastPage && !isFetching;
}

// async action to establish connection and fetch posts
export const fetchPosts = (slug = '', page = 0, isLastPage = false, isFetching = false) => (dispatch) => {
  if (shouldFetchPosts(isLastPage, isFetching)) {
    dispatch(requestPosts());
    return callApi(page, slug)
            .then(({ posts, isLastPageNow, newPage }) =>
              dispatch(receivePosts(posts, isLastPageNow, newPage)));
  }
  return false;
};
