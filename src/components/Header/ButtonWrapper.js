import styled from 'styled-components';
import settings from '../../services/settings';

export default styled.button`

  display: block;

  position:absolute;
  top: 0;
  left: 10px;

  padding: 12px;

  width: ${settings.buttonWidth}px;
  height: ${settings.buttonHeight}px;

  -webkit-appearance: normal;
  background: none;
  border: none;
  outline:none;
  
  z-index:4;

`;
