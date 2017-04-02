import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { fetchPosts } from '../store/posts/actions';

import Layout from '../components/Layout';
import PostsContainer from '../containers/PostsContainer';

function IndexPage() {
  return (
    <Layout>
      <PostsContainer />
    </Layout>
  );
}

IndexPage.getInitialProps = ({ store }) => store.dispatch(fetchPosts());

export default withRedux(initStore)(IndexPage);
