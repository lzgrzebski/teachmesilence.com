import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { fetchPosts, fetchSinglePost } from '../store/posts/actions';

import Layout from '../components/Layout';
import SinglePostContainer from '../containers/SinglePostContainer';

function PostPage() {
  return (
    <Layout>
      <SinglePostContainer />
    </Layout>
  );
}

PostPage.getInitialProps = ({ store, query: { slug } }) => {
  if (slug) {
    return store.dispatch(fetchSinglePost(slug));
  }
  return store.dispatch(fetchPosts());
};

export default withRedux(initStore)(PostPage);
