import React from 'react';
// import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import Title from '../RecommendedPosts/Title';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';

export default function NotifyBox() {
  const subscribe = (e) => {
     window.OneSignal.push(["registerForPushNotifications"]);
     e.preventDefault();
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>If you like this blog, let's keep in  touch!</Title>
        <ButtonWrapper>
          <Button onClick={subscribe}>Enable notifications</Button>
          <Button primary>Follow me on instagram</Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

NotifyBox.propTypes = {

};
