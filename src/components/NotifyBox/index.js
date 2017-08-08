import React from 'react';
import PropTypes from 'prop-types';

import settings from '../../services/settings';
import { NOTIFYBOX_INSTAGRAM_CLICK, NOTIFYBOX_NOTIFY_CLICK } from '../../store/user/actionTypes';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import Title from '../RecommendedPosts/Title';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';

export default function NotifyBox({ notifyBtn, clickTracking }) {
  // const handleSubscribe = (e) => {
  //   clickTracking(NOTIFYBOX_NOTIFY_CLICK);
  //   window.OneSignal.push(['registerForPushNotifications']);
  //   e.preventDefault();
  // };

  const handleInstagramClick = () => {
    clickTracking(NOTIFYBOX_INSTAGRAM_CLICK);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>{settings.notifyBoxTitle}</Title>
        <ButtonWrapper>
          {/* {notifyBtn && <Button onClick={handleSubscribe}>{settings.notifyBoxBtnPush}</Button>} */}
          <a href={settings.instagramUrl} onClick={handleInstagramClick} rel="noopener noreferrer" target="_blank">
            <Button primary>
              {settings.notifyBoxBtnInstagram}
            </Button>
          </a>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

NotifyBox.propTypes = {
  clickTracking: PropTypes.func.isRequired,
  notifyBtn: PropTypes.bool.isRequired,
};
