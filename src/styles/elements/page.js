import { css } from 'styled-components';
import settings from '../../services/settings';
import { pxTo, lineHeight } from '../../services/helpers';

export default css`

  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size: ${pxTo(settings.fontSize, 'em', '16px')};
    line-height: ${lineHeight()};

    overflow-y: scroll; 
    min-height: 100%;

    color: ${settings.colorBase};
    background-color: ${settings.backgroundBase};
  }

`;
