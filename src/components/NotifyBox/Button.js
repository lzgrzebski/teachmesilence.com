import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { from } from '../../services/helpers';
import Button from '../RecommendedPosts/Button';

export default styled(Button)`

  background: ${({ primary }) => (primary ? '#fff' : settings.colorLinks)};
  color: ${({ primary }) => (primary ? settings.colorLinks : '#fff')};

  margin-top:10px;
  margin-bottom: 10px;

  ${from('tablet')(css`
    margin-left:10px;
    margin-right:10px;
  `)}

  height:55px;

  &:active:after {
      background-color: ${({ primary }) => (primary ? settings.colorLinks : '#fff')};
  }

  ${from('desktop')(css`
    &:hover:after {
      background-color: ${({ primary }) => (primary ? settings.colorLinks : '#fff')};
    }
  `)}

`;
