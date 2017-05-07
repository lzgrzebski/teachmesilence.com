import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { fontSize, from } from '../../services/helpers';

export default styled.a`
  
    font-family: tms-header,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
    ${fontSize('30px')}
    line-height: 1.659;
    letter-spacing: -.02em;

    color: #555;

    border-color: transparent;
    border-width: 4px;

    padding-bottom: 4px;

    transition: border-color 200ms ease-in-out, color 200ms ease-in-out;

    &:hover {
      border-color: ${settings.colorLinks};
      color:#333;
    }

    ${from('tablet')(css`
      ${fontSize('45px')}
    `)}

`;
