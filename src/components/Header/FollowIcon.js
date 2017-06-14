import React from 'react';
import styled, { css } from 'styled-components';
import { from, until } from '../../services/helpers';

const FollowIcon = styled.svg`

  fill: #ff5a5f;
  width: 26px;
  height: 26px;

  vertical-align: -18%;

  cursor: pointer;

  display: inline-block;

  ${from('tablet')(css`
    margin-right: 12px;
  `)}

  ${until('tablet')(css`
    width: 30px;
    height: 30px;
    vertical-align: -22%;
  `)}

`;

export default () => (
  <FollowIcon>
    <use xlinkHref="#instagram" />
  </FollowIcon>
);
