import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './Post';

const Wrapper = styled.div`

`;

export default function Posts({ posts }) {
  return (
    <Wrapper>
      {
        posts.map(post => (
          <Post key={post.slug} {...post} />
        ),
      )}
    </Wrapper>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
