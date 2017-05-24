import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

export default styled.span`

  position: relative;
  display:none;

  ${from('tablet')(css`
    display: inline-block;
  `)}

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background-color: transparent;
    bottom: 3px;
    transition: background-color 200ms ease-in-out; 
  }
`;
