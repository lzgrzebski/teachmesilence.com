import styled from 'styled-components';
import settings from '../../services/settings';

import Button from '../RecommendedPosts/Button';

export default styled(Button)`

  background: transparent;
  border: none;
  color: ${settings.pinnedColor};

  z-index:4;

  padding:0;

  &:hover span:after {
    background-color: ${settings.colorLinks};;
  }

  &:after { /*hacky removing parent after*/ 
    content: none;
  }
  
`;
