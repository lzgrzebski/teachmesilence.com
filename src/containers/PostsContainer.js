import _debounce from 'lodash.debounce';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyPhotos from './decorators/LazyPhotos';

import settings from '../services/settings';

import { fetchPosts, setActivePost } from '../store/posts/actions';
import { getFullPosts } from '../store/posts/reducer';
import Posts from '../components/Posts';
import Loader from '../components/Loader';

@LazyPhotos
class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLastPage: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    setActivePost: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldLoadPosts = () => {
    const wrap = document.getElementsByTagName('body')[0];
    const contentHeight = wrap.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight + settings.infiniteScrollOffset;
    return y >= contentHeight;
  }

  handleScroll = _debounce(() => {
    if (!this.props.isFetching && this.shouldLoadPosts()) {
      this.props.fetchPosts(this.props.page, this.props.isLastPage, this.props.isFetching);
    }
  })

  handleEnter = (slug) => {
    this.props.setActivePost(slug);
  }

  render() {
    return (
      <main onScroll={this.handleScroll}>
        {this.props.posts && <Posts posts={this.props.posts} handleEnter={this.handleEnter} />}
        {this.props.isFetching && <Loader />}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: getFullPosts(state),
    page: state.store.page,
    isLastPage: state.store.isLastPage,
    isFetching: state.store.isFetching,
  };
}

export default connect(mapStateToProps, { fetchPosts, setActivePost })(PostsContainer);
