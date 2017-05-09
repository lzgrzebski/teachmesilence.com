import _debounce from 'lodash.debounce';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyPhotos from 'blazy';
import { connect } from 'react-redux';

import { fetchPosts, setActivePost } from '../store/posts/actions';
import { getFullPosts } from '../store/posts/reducer';
import Posts from '../components/Posts';

const OFFSET = 1000;

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
    this.lazy = new LazyPhotos({
      offset: 1000,
      selector: '.lazy',
      successClass: 'lazy--loaded',
      success: e => e.parentNode.classList.add('picture--loaded'),
    });
    window.addEventListener('scroll', _debounce(this.handleScroll));
    window.addEventListener('resize', _debounce(this.handleResize, 400, { leading: false, trailing: true }));
  }
  componentDidUpdate() {
    if (!this.props.isFetching) {
      this.lazy.revalidate();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', _debounce(this.handleScroll));
  }

  handleScroll = () => {
    const wrap = document.getElementsByTagName('body')[0];
    const contentHeight = wrap.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight + OFFSET;
    if (!this.props.isFetching && y >= contentHeight) {
      this.props.fetchPosts(this.props.page, this.props.isLastPage, this.props.isFetching);
    }
  }

  handleResize = () => {
    const notRenderedImages = document.querySelectorAll('.lazy:not(.lazy--loaded)');
    if (notRenderedImages.length > 0) {
      this.lazy.revalidate();
    }
  }

  handleEnter = (slug) => {
    this.props.setActivePost(slug);
  }

  render() {
    return (
      <main onScroll={this.handleScroll}>
        {this.props.posts && <Posts posts={this.props.posts} handleEnter={this.handleEnter} />}
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
