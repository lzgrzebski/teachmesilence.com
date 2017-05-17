import styled from 'styled-components';
import getIcon from '../../styles/tools/sprite';

export default styled.span`

  background-image: url(${getIcon('heart')}) 

  background-repeat:no-repeat;
  background-position:50% 50%;
  background-size: 100%;
  width: 32px;
  height: 32px;
  opacity: 0.75;

  vertical-align: -26%;

  cursor: pointer;

  display: inline-block;

`;
