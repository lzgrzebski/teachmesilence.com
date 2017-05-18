import React from 'react';
import PropTypes from 'prop-types';
import settings from '../../services/settings';
import { getFbShareUrl } from '../../services/helpers';

import Wrapper from './Wrapper';
import Heart from './Heart';
import Count from './Count';
import Text from './Text';

export default function Social({ slug, shares, liked, handleClick }) {
  const handleShareClick = e => handleClick(slug, shares, liked, e);
  return (
    <Wrapper href={getFbShareUrl(slug)} target="_blank" onClick={handleShareClick}>
      <Heart liked={liked} />
      {
        shares > 0 &&
        (
          <Count>
            <b>{shares}</b>
            <Text> {shares === 1 ? settings.person : settings.people} {settings.sharedText}</Text>
          </Count>
        )
      }
    </Wrapper>
  );
}

Social.propTypes = {
  slug: PropTypes.string.isRequired,
  shares: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
