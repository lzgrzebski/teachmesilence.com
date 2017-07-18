import styled, { css } from 'styled-components';
import { fontSize, fontWeight, from } from '../../services/helpers';

export default styled.p`

    font-family: tms-text,Georgia,Cambria,"Times New Roman",Times,serif;
    ${fontWeight()};
    letter-spacing: -.004em;
    line-height:1.58;

    white-space: pre-line; 

    margin-bottom: 20px;

    color: #666;

    ${from('tablet')(css`

      ${fontSize('20px')}
      letter-spacing: -.003em;

      margin-bottom: 35px;

    `)}
`;
