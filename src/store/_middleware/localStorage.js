import * as types from '../user/actionTypes';

function loadVisitedPosts() {
  try {
    const visitedPostsLocalStorage = window.localStorage.getItem('visitedPosts');
    if (visitedPostsLocalStorage === null) {
      return undefined;
    }
    return JSON.parse(visitedPostsLocalStorage);
  } catch (e) {
    return undefined;
  }
}

export function saveVisitedPosts(visitedPosts) {
  try {
    const serializedVisitedPosts = JSON.stringify(visitedPosts);
    window.localStorage.setItem('visitedPosts', serializedVisitedPosts);
  } catch (e) {
    // ignore errors
  }
}

export default () => next => (action) => {
  switch (action.type) {
    case types.GET_VISITED_POSTS: {
      const visitedPostsLocalStorage = loadVisitedPosts();
      if (!visitedPostsLocalStorage) {
        return next(action);
      }
      return next(
        { ...action, visitedPosts: [...action.visitedPosts, ...visitedPostsLocalStorage] },
      );
    }
    default:
      return next(action);
  }
};
