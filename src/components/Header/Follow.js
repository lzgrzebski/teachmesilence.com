import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { from, until } from '../../services/helpers';

import Button from '../RecommendedPosts/Button';

export default styled(Button)`

  background: transparent;
  border: none;
  color: #fff;

  z-index:4;

  ${until('tablet')(css` /*not mobile first*/
    border-radius: 50%;
    padding: 0;
  `)}

  ${from('tablet')(css`
    padding-left: 35px;
    padding-right: 35px;
  `)}

  &:hover span:after {
    background-color:#fff;
    /*background-color: #ff5a5f;*/
  }

  &:after { /*hacky removing parent after*/ 
    content: none;
  }
  
`;


