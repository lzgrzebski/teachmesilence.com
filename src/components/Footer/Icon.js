import styled from 'styled-components';
import getIcon from '../../styles/tools/sprite';

export default styled.a`

  background-image: url(${({ name }) => getIcon(name)});

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  width: 30px;
  height: 30px;
  opacity: 0.75;

  vertical-align: -26%;

  cursor: pointer;

  display: inline-block;

  transition: opacity 0.2s ease-in-out;
  will-change:opacity;

  margin-left:5px;
  margin-right:5px;

  border:0;

  &:hover {
    opacity:1;
  }

`;
