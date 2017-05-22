import styled from 'styled-components';
import getIcon from '../../styles/tools/sprite';

export default styled.span`

  background-image: url(${getIcon('instagramWhite')});

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  width: 26px;
  height: 26px;

  margin-right: 9px;

  vertical-align: -18%;

  cursor: pointer;

  display: inline-block;

`;
