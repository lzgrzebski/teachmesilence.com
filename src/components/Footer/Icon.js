import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconLink = styled.a`
  border: 0;
`;

const IconWrapper = styled.svg`

  fill: #b3b3b3;
  width: 30px;
  height: 30px;
  opacity: 0.75;

  vertical-align: -26%;

  cursor: pointer;

  display: inline-block;

  transition: opacity 0.2s ease-in-out;
  will-change:opacity;

  margin-left:5px;
  margin-right:5px;

  border:0;

  &:hover {
    opacity:1;
  }

`;

const Icon = props => (
  <IconLink {...props}>
    <IconWrapper>
      <use xlinkHref={`#${props.name}`} />
    </IconWrapper>
  </IconLink>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
