import _throttle from 'lodash.throttle';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LazyPhotos from '../decorators/LazyPhotos';
import { shouldLoadPosts, getFbShareUrl, windowOpen } from '../services/helpers';
import { fetchRecommendedPosts, shareClick, fetchSharesNumber } from '../store/posts/actions';
import { getVisitedPosts, addVisitedPost, clickTracking } from '../store/user/actions';
import { getCurrentPost, getRecommendedPosts } from '../store/posts/reducer';
import { saveVisitedPosts } from '../store/_middleware/localStorage';
import Main from '../components/Main';
import Post from '../components/Post';
import RecommendedPosts from '../components/RecommendedPosts';
import NotifyBox from '../components/NotifyBox';
import Footer from '../components/Footer';

@LazyPhotos
class SinglePostContainer extends Component {
  static propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(PropTypes.object).isRequired,
      cover: PropTypes.shape({
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }),
      sharesLoaded: PropTypes.bool.isRequired,
    }).isRequired,
    visitedPosts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    fetchRecommendedPosts: PropTypes.func.isRequired,
    getVisitedPosts: PropTypes.func.isRequired,
    addVisitedPost: PropTypes.func.isRequired,
    recommendedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetchingRecommendedPosts: PropTypes.bool.isRequired,
    isDownloadedRecommendedPosts: PropTypes.bool.isRequired,
    fetchSharesNumber: PropTypes.func.isRequired,
    shareClick: PropTypes.func.isRequired,
    notifyBtn: PropTypes.bool.isRequired,
    clickTracking: PropTypes.func.isRequired,
  }

  componentDidMount() {
    if (this.props.post) {
      this.props.getVisitedPosts(this.props.post.slug);
      window.addEventListener('scroll', this.handleScroll);
      this.slug = this.props.post.slug;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visitedPosts.length !== nextProps.visitedPosts.length) {
      saveVisitedPosts(nextProps.visitedPosts);
    }
  }

  componentDidUpdate() {
    if (this.props.post) {
      const { post: { slug } } = this.props;

      if (this.slug !== slug && !this.props.visitedPosts.includes(slug)) {
        this.props.addVisitedPost(this.props.post.slug);
      }

      if (!this.props.post.sharesLoaded) {
        this.props.fetchSharesNumber(this.props.post.slug);
      }

      this.slug = slug;
    }
  }

  componentWillUnmount() {
    if(window && this.handleScroll){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  shoudlLoadRecommendedPosts() {
    return !this.props.isFetchingRecommendedPosts &&
           !this.props.isDownloadedRecommendedPosts &&
           !this.props.recommendedPosts.length;
  }

  handleScroll = _throttle(() => {
    if (shouldLoadPosts() && this.shoudlLoadRecommendedPosts()) {
      this.props.fetchRecommendedPosts(this.props.visitedPosts);
    }
  }, 300)

  handleClick = (slug, shares, liked, e) => {
    e.preventDefault();
    if (!liked) windowOpen(getFbShareUrl(slug));
    this.props.shareClick(slug, shares, liked);
  }

  render() {
    return (
      <Main>
        {this.props.post && <Post {...this.props.post} handleClick={this.handleClick} />}
        {this.props.recommendedPosts &&
          <RecommendedPosts
            isDownloaded={this.props.isDownloadedRecommendedPosts}
            isFetching={this.props.isFetchingRecommendedPosts}
            posts={this.props.recommendedPosts}
          />
        }
        <NotifyBox notifyBtn={this.props.notifyBtn} clickTracking={this.props.clickTracking} />
        <Footer clickTracking={this.props.clickTracking} />
      </Main>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: getCurrentPost(state),
    visitedPosts: state.user.visitedPosts,
    isDownloadedRecommendedPosts: state.user.isDownloadedRecommendedPosts,
    isFetchingRecommendedPosts: state.user.isFetchingRecommendedPosts,
    recommendedPosts: getRecommendedPosts(state),
    notifyBtn: state.header.notifyBtn,
  };
}

export default connect(
  mapStateToProps,
  {
    getVisitedPosts,
    addVisitedPost,
    fetchRecommendedPosts,
    fetchSharesNumber,
    shareClick,
    clickTracking,
  },
)(SinglePostContainer);
