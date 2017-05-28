import styled from 'styled-components';
import settings from '../../services/settings';

export default styled.button`

  position:relative;
  display:block;

  padding: 0;

  width: 35px;
  height: ${settings.buttonHeight}px;

  -webkit-appearance: normal;
  background: none;
  border: none;
  outline:none;
  
  z-index:4;

  cursor:pointer;

`;
