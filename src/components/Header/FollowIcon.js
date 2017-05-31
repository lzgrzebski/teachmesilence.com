import styled, { css } from 'styled-components';
import { from, until } from '../../services/helpers';

import getIcon from '../../styles/tools/sprite';

export default styled.span`

  background-image: url(${getIcon('instagramRed')});

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
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
