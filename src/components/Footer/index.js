import React from 'react';
import PropTypes from 'prop-types';

import settings from '../../services/settings';
import { LINKEDIN_BOTTOM_CLICK, INSTAGRAM_BOTTOM_CLICK, GITHUB_BOTTOM_CLICK } from '../../store/user/actionTypes';
import Wrapper from './Wrapper';
import Text from './Text';
import Icon from './Icon';

export default function Footer({ clickTracking }) {
  const handleLinkedinClick = () => {
    clickTracking(LINKEDIN_BOTTOM_CLICK);
  };
  const handleGithubClick = () => {
    clickTracking(GITHUB_BOTTOM_CLICK);
  };
  const handleInstagramClick = () => {
    clickTracking(INSTAGRAM_BOTTOM_CLICK);
  };
  return (
    <Wrapper>
      <Text>{settings.footerText} <a href={settings.linkedinUrl} onClick={handleLinkedinClick} rel="noopener noreferrer" target="_blank">{settings.siteAuthor}</a></Text>
      <div>
        <Icon name="github" href={settings.githubUrl} onClick={handleGithubClick} rel="noopener noreferrer" target="_blank" />
        <Icon name="instagram" href={settings.instagramUrl} onClick={handleInstagramClick} rel="noopener noreferrer" target="_blank" />
      </div>
    </Wrapper>
  );
}

Footer.propTypes = {
  clickTracking: PropTypes.func.isRequired,
};
