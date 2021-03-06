import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Post from './Post';


const Wrapper = styled.div`
  & > div:not(:first-child)  {
    border-top: 1px solid #eee;

    h1 {
      margin-top: 45px;
    }
  }
`;

export default function Posts({ posts, handleEnter, handleClick, handleEnterSocial }) {
  return (
    <Wrapper>
      {
        posts.map(post => (
          <Waypoint
            key={post.slug}
            onEnter={waypointData => handleEnter(post.slug, waypointData)}
          >
            <div>
              <Post
                {...post}
                handleClick={handleClick}
                handleEnterSocial={handleEnterSocial}
                lazySocialLoading
              />
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
  handleEnterSocial: PropTypes.func.isRequired,
};
