import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/configureStore';

import { fetchPosts } from '../actions/index';

import App from '../components/App';

import scss from './index.scss';

class Root extends Component {
  static getInitialProps({ store }) {
    return store.dispatch(fetchPosts());
  }
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: scss }} />
        <App />
      </div>
    );
  }
}

export default withRedux(initStore)(Root);
