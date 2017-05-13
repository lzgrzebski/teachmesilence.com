import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './ButtonWrapper';
import ButtonIcon from './ButtonIcon';

export default function Button({ isMenuOpen, handleClick, pinned }) {
  return (
    <ButtonWrapper onClick={handleClick}>
      <ButtonIcon isMenuOpen={isMenuOpen} pinned={pinned} />
    </ButtonWrapper>
  );
}


Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  pinned: PropTypes.bool.isRequired,
};
