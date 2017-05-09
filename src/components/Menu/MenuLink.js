import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { fontSize, from } from '../../services/helpers';

function Link(props) {
  const { onBefore, active, ...prop } = props;

  const handleClick = (event) => {
    if (onBefore) {
      onBefore(event);
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };
  // TODO fix eslint error
  return <a {...prop} onClick={handleClick} />;
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onBefore: PropTypes.func,
  onClick: PropTypes.func.isRequired,
};

Link.defaultProps = {
  onBefore: null,
};

export default styled(Link)`
  
    font-family: tms-header,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
    ${fontSize('30px')}
    line-height: 1.659;
    letter-spacing: -.02em;

    color: #555;

    border-color: ${({ active }) => (active ? settings.colorLinks : 'transparent')};
    border-width: 4px;

    padding-bottom: 4px;

    transition: border-color 200ms ease-in-out, color 200ms ease-in-out;

    &:hover {
      border-color: ${settings.colorLinks};
      color:#333;
    }

    ${from('tablet')(css`
      ${fontSize('45px')}
    `)}

`;
