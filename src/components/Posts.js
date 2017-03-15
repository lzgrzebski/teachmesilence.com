import React, { PropTypes } from 'react';

import Post from './Post';

export default function Posts({ posts }) {
  return (
    <div>
      {
        posts.map(post => (
          <Post key={post.id} {...post} />
        ),
      )}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
