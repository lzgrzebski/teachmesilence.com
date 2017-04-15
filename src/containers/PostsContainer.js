import _debounce from 'lodash.debounce';
import React, { PropTypes, Component } from 'react';
import LazyPhotos from 'blazy';
import { connect } from 'react-redux';

import { fetchPosts } from '../store/posts/actions';
import { getFullPosts } from '../store/posts/reducer';
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
    this.lazy = new LazyPhotos({
      offset: 1000,
      selector: '.Photo__element',
      successClass: 'Photo__element--loaded',
    });
    window.addEventListener('scroll', _debounce(this.handleScroll));
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

  render() {
    return (
      <main onScroll={this.handleScroll}>
        {this.props.posts && <Posts posts={this.props.posts} />}
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

export default connect(mapStateToProps, { fetchPosts })(PostsContainer);
