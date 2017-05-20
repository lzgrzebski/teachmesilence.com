import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Post from './Post';


const Wrapper = styled.div`

`;

export default function Posts({ posts, handleEnter, handleClick }) {
  return (
    <Wrapper>
      {
        posts.map(post => (
          <Waypoint
            key={post.slug}
            onEnter={waypointData => handleEnter(post.slug, post.sharesLoaded, waypointData)}
          >
            <div>
              <Post {...post} handleClick={handleClick} />
            </div>
          </Waypoint>
        ),
      )}
    </Wrapper>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEnter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
