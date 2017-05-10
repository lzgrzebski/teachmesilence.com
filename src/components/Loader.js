import React from 'react';
import styled, { keyframes } from 'styled-components';

import settings from '../services/settings';

const bounceDelay = keyframes`

  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }

`;

const Spinner = styled.div`
  margin: 10px auto 20px;
  width: 100px;
  text-align: center;
`;

const Bounce = styled.div`
  width: 10px;
  height: 10px;
  
  margin-left:5px;
  margin-right:5px;

  background-color: ${settings.colorLinks};
  opacity: 0.8;

  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;
`;

const Bounce1 = styled(Bounce)`
  animation-delay: -0.32s;
`;

const Bounce2 = styled(Bounce)`
  animation-delay: -0.16s;
`;

export default () => (
  <Spinner>
    <Bounce1 />
    <Bounce2 />
    <Bounce />
  </Spinner>
);
