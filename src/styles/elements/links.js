import { css } from 'styled-components';
import settings from '../../services/settings';

const colorLinks = settings.colorLinks;

export default css`

  a {
    text-decoration: none;
    border-bottom: 1px solid;

    color: ${colorLinks};
  }
  
`;
