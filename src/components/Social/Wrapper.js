import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

export default styled.a`
    display: inline-block;
    border-bottom: 0;

    padding-left: 15px;
    padding-right: 15px;

    ${from('desktopFull')(css`
      padding-left: 0;
      padding-right: 0;
    `)}
`;
