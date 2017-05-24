import React from 'react';
import PropTypes from 'prop-types';

import settings from '../../services/settings';
import { TOP_INSTAGRAM_CLICK } from '../../store/user/actionTypes';

import Wrapper from './Wrapper';
import HeaderWrapper from './HeaderWrapper';
import HeaderElements from './HeaderElements';
import Button from './Button';
import Logo from './Logo';
import Follow from './Follow';
import FollowIcon from './FollowIcon';
import FollowText from './FollowText';
import Menu from '../Menu';

export default function Header({
  handleClick,
  isMenuOpen,
  isFixed,
  isPinned,
  links,
  activePost,
  clickTracking,
}) {
  const handleInstagramClick = () => {
    clickTracking(TOP_INSTAGRAM_CLICK);
  };
  return (
    <Wrapper active={isMenuOpen}>
      <HeaderWrapper
        active={isMenuOpen}
        unfixed={!isFixed && !isPinned}
        unpinned={isFixed && !isPinned}
        pinned={isPinned && isFixed}
      >
        <HeaderElements>
          <Button handleClick={handleClick} isMenuOpen={isMenuOpen} pinned={isPinned && isFixed} />
          <Logo />
          <a href={settings.instagramUrl} onClick={handleInstagramClick} rel="noopener noreferrer" target="_blank">
            <Follow>
              <FollowIcon />
              <FollowText>Follow me</FollowText>
            </Follow>
          </a>
        </HeaderElements>
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
  clickTracking: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
  isPinned: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePost: PropTypes.string,
};

Header.defaultProps = {
  activePost: null,
};
