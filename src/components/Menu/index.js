import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Wrapper from './Wrapper';
import MenuList from './MenuList';
import MenuLinkWrapper from './MenuLinkWrapper';
import MenuLink from './MenuLink';

export default function Menu({ links, isMenuOpen, activePost, handleClick }) {
  return (
    <Wrapper active={isMenuOpen}>
      <MenuList>
        {links.map(({ slug, title }) => (
          <MenuLinkWrapper key={`link-${slug}`}>
            <Link prefetch href={`/post?slug=${slug}`} as={`/post/${slug}/`}>
              <MenuLink
                onBefore={handleClick}
                href={`/post/${slug}/`}
                active={activePost === slug}
              >
                {title}
              </MenuLink>
            </Link>
          </MenuLinkWrapper>
          ),
        )}
      </MenuList>
    </Wrapper>
  );
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePost: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  activePost: null,
};
