import _throttle from 'lodash.throttle';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LazyPhotos from '../decorators/LazyPhotos';
import { shouldLoadPosts, getFbShareUrl, windowOpen } from '../services/helpers';
import { fetchPosts, setActivePost, shareClick, fetchSharesNumber } from '../store/posts/actions';
import { getFullPosts } from '../store/posts/reducer';
import Posts from '../components/Posts';
import Loader from '../components/Loader';
import NotifyBox from '../components/NotifyBox';
import Footer from '../components/Footer';

@LazyPhotos
class PostsContainer extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLastPage: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    setActivePost: PropTypes.func.isRequired,
    shareClick: PropTypes.func.isRequired,
    fetchSharesNumber: PropTypes.func.isRequired,
    notifyBtn: PropTypes.bool.isRequired,
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
  }, 200)

  handleEnter = (slug, sharesLoaded) => {
    this.props.setActivePost(slug);
    if (!sharesLoaded) {
      this.props.fetchSharesNumber(slug);
    }
  }

  handleClick = (slug, shares, liked, e) => {
    e.preventDefault();
    if (!liked) windowOpen(getFbShareUrl(slug));
    this.props.shareClick(slug, shares, liked);
  }

  render() {
    return (
      <main onScroll={this.handleScroll}>
        {this.props.posts &&
          (
            <Posts
              posts={this.props.posts}
              handleEnter={this.handleEnter}
              handleClick={this.handleClick}
            />)
        }
        {this.props.isFetching && <Loader />}
        {this.props.isLastPage && <NotifyBox notifyBtn={this.props.notifyBtn} />}
        {this.props.isLastPage && <Footer />}
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
    notifyBtn: state.header.notifyBtn,
  };
}

export default connect(
  mapStateToProps, { fetchPosts, setActivePost, shareClick, fetchSharesNumber },
)(PostsContainer);
