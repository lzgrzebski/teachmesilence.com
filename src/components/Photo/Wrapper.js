import styled from 'styled-components';
import settings from '../../services/settings';

export default styled.picture`

  display: block;

  width: 100%;
  height: auto;
  
  position: relative;
  overflow: hidden;

  margin-bottom: ${settings.spacingUnit};
  padding-top: ${props => `${props.paddingTop}`};

  background: ${settings.backgroundPhotoPlaceholder}; 

`;
