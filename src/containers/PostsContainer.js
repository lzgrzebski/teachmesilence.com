import _throttle from 'lodash.throttle';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LazyPhotos from '../decorators/LazyPhotos';
import { shouldLoadPosts, getFbShareUrl, windowOpen } from '../services/helpers';
import { fetchPosts, setActivePost, shareClick, fetchSharesNumber } from '../store/posts/actions';
import { clickTracking } from '../store/user/actions';
import { getFullPosts } from '../store/posts/reducer';
import Main from '../components/Main';
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
    clickTracking: PropTypes.func.isRequired,
  }

  componentDidMount() {
    if(window && this.handleScroll) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  componentWillUnmount() {
    if(window && this.handleScroll){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = _throttle(() => {
    if (!this.props.isFetching && shouldLoadPosts()) {
      this.props.fetchPosts(this.props.page, this.props.isLastPage, this.props.isFetching);
    }
  }, 200)

  handleEnter = (slug) => {
    this.props.setActivePost(slug);
  }

  handleEnterSocial = (slug, sharesLoaded) => {
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
      <Main onScroll={this.handleScroll}>
        {this.props.posts &&
          (
            <Posts
              posts={this.props.posts}
              handleEnter={this.handleEnter}
              handleClick={this.handleClick}
              handleEnterSocial={this.handleEnterSocial}
            />)
        }
        {this.props.isFetching && <Loader />}
        {this.props.isLastPage && (
          <NotifyBox notifyBtn={this.props.notifyBtn} clickTracking={this.props.clickTracking} />
        )}
        {this.props.isLastPage && <Footer clickTracking={this.props.clickTracking} />}
      </Main>
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
  mapStateToProps,
  { fetchPosts, setActivePost, shareClick, fetchSharesNumber, clickTracking },
)(PostsContainer);
