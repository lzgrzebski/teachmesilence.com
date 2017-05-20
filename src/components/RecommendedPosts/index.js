import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Loader from '../../decorators/Loader';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import Title from './Title';
import Button from './Button';
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
        {posts.map(({ slug, title, cover }) => (
          <Link key={`recommended-${slug}`} prefetch href={`/post?slug=${slug}`} as={`/post/${slug}/`}>
            <Wrapper href={`/post/${slug}/`}>
              <CoverPhoto key={cover.id} {...cover} margin="0" />
              <ContentWrapper>
                <Title>{title}</Title>
                <Button>See More</Button>
              </ContentWrapper>
            </Wrapper>
          </Link>
        ))}
      </div>
    );
  }
}

export default RecommendedPosts;
