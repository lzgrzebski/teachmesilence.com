import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { from } from '../../services/helpers';

import Button from '../RecommendedPosts/Button';

export default styled(Button)`

  background: ${settings.colorLinks};
  border-color: ${settings.colorLinks};
  color: #fff;

  ${from('tablet')(css`
    padding-left: 35px;
    padding-right: 35px;
  `)}
  
`;
