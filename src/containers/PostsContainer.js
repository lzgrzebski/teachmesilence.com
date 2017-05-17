import _throttle from 'lodash.throttle';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LazyPhotos from '../decorators/LazyPhotos';
import { shouldLoadPosts } from '../services/helpers';
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

  handleScroll = _throttle(() => {
    if (!this.props.isFetching && shouldLoadPosts()) {
      this.props.fetchPosts(this.props.page, this.props.isLastPage, this.props.isFetching);
    }
  }, 300)

  handleEnter = (slug) => {
    this.props.setActivePost(slug);
    //this.props.getNumberOfShares(url)
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
