import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyPhotos from './decorators/LazyPhotos';

import { getCurrentPost } from '../store/posts/reducer';
import Post from '../components/Post';

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
    }).isRequired,
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {this.props.post && <Post {...this.props.post} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: getCurrentPost(state),
  };
}

export default connect(mapStateToProps, null)(SinglePostContainer);
