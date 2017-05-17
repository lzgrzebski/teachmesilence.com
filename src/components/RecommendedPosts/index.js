import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../decorators/Loader';
import Wrapper from './Wrapper';
import CoverPhoto from '../CoverPhoto';

@Loader
class RecommendedPosts extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentDidMount() {

  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(({ cover }) => (
          <Wrapper>
            <CoverPhoto key={cover.id} {...cover} />
          </Wrapper>
        ))}
      </div>
    );
  }
}

export default RecommendedPosts;
