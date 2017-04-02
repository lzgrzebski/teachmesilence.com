import React, { PropTypes } from 'react';

import Post from './Post';

export default function Posts({ posts }) {
  return (
    <div>
      {
        posts.map(post => (
          <Post key={post.slug} {...post} />
        ),
      )}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
