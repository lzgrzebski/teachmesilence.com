import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { fontSize, from } from '../../services/helpers';

export default styled.h1`

    font-family: tms-header,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
    ${fontSize('32px')}
    letter-spacing: -.02em;
    line-height:1.04;

    margin-left:-2px;
    margin-top: ${settings.spacingUnitTiny};
    margin-bottom: ${settings.spacingUnitSmall};

    ${from('tablet')(css`
      ${fontSize('53px')}
    `)}

`;
