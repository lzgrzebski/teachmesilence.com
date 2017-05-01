import React, { PropTypes } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { fetchSinglePost } from '../store/posts/actions';

import Layout from '../components/Layout';
import SinglePostContainer from '../containers/SinglePostContainer';

function PostPage({ title }) {
  return (
    <Layout title={title}>
      <SinglePostContainer />
    </Layout>
  );
}

PostPage.getInitialProps = async ({ store, query: { slug } }) => {
  await store.dispatch(fetchSinglePost(slug));
  const { store: { posts } } = store.getState();
  if (!(posts && posts[slug])) {
    const err = new Error();
    err.code = 'ENOENT';
    throw err;
  }
  return { title: posts[slug].title };
};

PostPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withRedux(initStore)(PostPage);
