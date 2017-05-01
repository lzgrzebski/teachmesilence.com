import React, { PropTypes } from 'react';
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
