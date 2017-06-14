import React from 'react';
import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

const Logo = props => (
  <LogoWrapper viewBox="0 0 47 47" {...props}>
    <path d="M23.5 2A21.5 21.5 0 1 1 2 23.5 21.52 21.52 0 0 1 23.5 2m0-2A23.5 23.5 0 1 0 47 23.5 23.5 23.5 0 0 0 23.5 0z" className="circle" />
    <path d="M3.04 32.58l15.22-12.14m19.81 20.37L17.63 20.44m27.12 9.58l-7.5-6.73m-9.77 6.96l11.61-6.85" className="hill" />
  </LogoWrapper>
);

const LogoWrapper = styled.svg`
  width: 40px;

  ${from('tablet')(css`
    width: 47px;
  `)}

  cursor: pointer;
  
  & .circle {
    fill: #666;
  }

  & .hill {
    fill:none;
    stroke-width: 2px;
    stroke: #666;
    stroke-miterlimit: 10;
  }
  
`;

export default Logo;
