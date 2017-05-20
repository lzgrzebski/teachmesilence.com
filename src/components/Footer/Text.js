import styled from 'styled-components';
import settings from '../../services/settings';
import { fontSize } from '../../services/helpers';

export default styled.span`
  ${fontSize('15px')};
  color: #b3b3b3;

  padding-left:15px;

  & a {
    color: #b3b3b3;
    border-color: #b3b3b3;
  }

`;
