import styled, { keyframes } from 'styled-components';
import settings from '../../services/settings';

const animatedPlaceholder = keyframes`

  0%, 80%, 100% {
    opacity:0.5;
  }

  30%, 50%{
    opacity:1;
  }

`;

export default styled.picture`

  display: block;

  width: 100%;
  height: auto;
  
  position: relative;
  overflow: hidden;

  margin-bottom: ${settings.spacingUnit};
  padding-top: ${props => `${props.paddingTop}`};

  background: ${settings.backgroundPhotoPlaceholder}; 
  transition:  opacity 500ms ease-in-out;

  &:not(.picture--loaded){
    animation: ${animatedPlaceholder} 1.7s linear -0.15s infinite;
  }

`;
