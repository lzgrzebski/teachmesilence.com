import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import HeaderWrapper from './HeaderWrapper';
import Button from './Button';
import Menu from '../Menu';

export default function Header({ handleClick, isMenuOpen, isFixed, isPinned, links, activePost }) {
  return (
    <Wrapper active={isMenuOpen}>
      <HeaderWrapper
        active={isMenuOpen}
        unfixed={!isFixed && !isPinned}
        unpinned={isFixed && !isPinned}
        pinned={isPinned && isFixed}
      >
        <Button handleClick={handleClick} isMenuOpen={isMenuOpen} pinned={isPinned && isFixed} />
        <Menu
          isMenuOpen={isMenuOpen}
          links={links}
          activePost={activePost}
          handleClick={handleClick}
        />
      </HeaderWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
  isPinned: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePost: PropTypes.string,
};

Header.defaultProps = {
  activePost: null,
};
