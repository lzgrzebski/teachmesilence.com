import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import initStore from '../store/configureStore';

import { fetchPosts } from '../actions/index';

import App from '../components/App';

import scss from './index.scss';

class Root extends Component {
  static getInitialProps({ store, query: { post } }) {
    return post ? store.dispatch(fetchPosts(post)) : store.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: scss }} />
        <App />
      </div>
    );
  }
}

export default withRedux(initStore)(Root);
