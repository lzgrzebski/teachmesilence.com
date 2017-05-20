import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { getAbsoluteUrl } from '../services/helpers';
import { fetchSinglePost } from '../store/posts/actions';

import Layout from '../components/Layout';
import SinglePostContainer from '../containers/SinglePostContainer';

function PostPage(props) {
  return (
    <Layout {...props}>
      <SinglePostContainer />
    </Layout>
  );
}

PostPage.getInitialProps = async ({ store, query: { slug } }) => {
  await store.dispatch(fetchSinglePost(slug));
  const { store: { posts } } = store.getState();
  const post = posts[slug];

  if (!(posts && post)) {
    const err = new Error();
    err.code = 'ENOENT';
    throw err;
  }

  const desc = post.description.replace(/(\r\n|\n|\r)/gm, ' ').substring(0, 120);
  return {
    title: post.title,
    desc,
    img: post.cover.url,
    url: getAbsoluteUrl(post.slug),
  };
};

export default withRedux(initStore)(PostPage);
