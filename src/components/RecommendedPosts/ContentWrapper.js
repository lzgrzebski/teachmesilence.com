import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';
import Content from '../Post/Content';

export default styled(Content)`

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display:flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: center;

    padding-left: 15px;
    padding-right: 15px;

    ${from('desktopFull')(css`
      padding-left: 0;
      padding-right: 0;
    `)}

`;
