import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Button from './Button';
import Menu from '../Menu';

export default function Header({ handleClick, isMenuOpen, links }) {
  return (
    <Wrapper active={isMenuOpen}>
      <Button handleClick={handleClick} isMenuOpen={isMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} links={links} />
    </Wrapper>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
