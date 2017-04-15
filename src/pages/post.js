import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { fetchSinglePost } from '../store/posts/actions';

import Layout from '../components/Layout';
import SinglePostContainer from '../containers/SinglePostContainer';

function PostPage() {
  return (
    <Layout>
      <SinglePostContainer />
    </Layout>
  );
}

PostPage.getInitialProps = async ({ store, query: { slug } }) => {
  await store.dispatch(fetchSinglePost(slug));
  const postAction = store.getState();
  if (!(postAction.store && postAction.store.posts[slug])) {
    const err = new Error();
    err.code = 'ENOENT';
    throw err;
  }
};

export default withRedux(initStore)(PostPage);
