import styled from 'styled-components';
import settings from '../../services/settings';

import Button from '../RecommendedPosts/Button';

export default styled(Button)`

  background: transparent;
  border: none;
  color: ${({ pinned, active }) => (pinned || active ? settings.pinnedColor : settings.unpinnedColor)};

  z-index:4;

  padding:0;

  &:hover span:after {
    background-color: ${({ pinned, active }) => (pinned || active ? settings.colorLinks : settings.unpinnedColor)};;
  }

  &:after { /*hacky removing parent after*/ 
    content: none;
  }
  
`;
