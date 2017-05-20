import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';
import Content from '../Post/Content';

export default styled(Content)`

    display:flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    padding-left: 15px;
    padding-right: 15px;

    ${from('desktopFull')(css`
      padding-left: 0;
      padding-right: 0;
    `)}

`;
