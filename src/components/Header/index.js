import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Button from './Button';
import Menu from '../Menu';

export default function Header({ handleClick, isMenuOpen, links, activePost }) {
  return (
    <Wrapper active={isMenuOpen}>
      <Button handleClick={handleClick} isMenuOpen={isMenuOpen} />
      <Menu
        isMenuOpen={isMenuOpen}
        links={links}
        activePost={activePost}
        handleClick={handleClick}
      />
    </Wrapper>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePost: PropTypes.string,
};

Header.defaultProps = {
  activePost: null,
};
