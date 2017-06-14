import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeartIcon = styled.svg`

  fill: #ff5a5f;
  width: 32px;
  height: 32px;
  opacity: ${({ liked }) => (liked ? '1' : '0.75')};;

  vertical-align: -26%;

  cursor: pointer;

  display: inline-block;

  transition: opacity 0.2s ease-in-out;
  will-change:opacity;

  &:hover {
    opacity:1;
  }

`;

const Heart = ({ liked }) => (
  <HeartIcon liked={liked}>
    <use xlinkHref={`#${liked ? 'heartFull' : 'heart'}`} />
  </HeartIcon>
);

Heart.propTypes = {
  liked: PropTypes.bool.isRequired,
};

export default Heart;
