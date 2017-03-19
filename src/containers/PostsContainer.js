import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import LazyPhotos from 'blazy';

import { fetchPosts } from '../actions/index';

import Posts from '../components/Posts';

const OFFSET = 500;

class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLastPage: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.lazy = new LazyPhotos({ offset: 1000 });
    window.addEventListener('scroll', debounce(this.handleScroll));
  }
  componentDidUpdate() {
    if (!this.props.isFetching) {
      this.lazy.revalidate();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll));
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

  render() {
    return (
      <main onScroll={this.handleScroll}>
        {this.props.posts && <Posts posts={this.props.posts} />}
        {this.props.isFetching ? `fetching ${this.props.page}` : `nofetching ${this.props.page}`}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.store.posts,
    page: state.store.page,
    isLastPage: state.store.isLastPage,
    isFetching: state.store.isFetching,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer);
