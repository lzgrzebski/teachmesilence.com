import styled, { css } from 'styled-components';
import settings from '../../services/settings';

export default styled.span`

  display: block;
  position: absolute;
  left: 0;
  right: 0;
  height: ${(settings.barThickness * 2) + settings.buttonBarSpace}px;
  top: 19px;
  
  &:before,
  &:after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: ${settings.barThickness}px;
    background-color: ${settings.pinnedColor};
    content: "";
    transition: transform .3s cubic-bezier(.4,0,0,1);
    transform-origin: center left;
    will-change: transform;
  }

  &:before {
    top: 0;

    ${({ isMenuOpen }) => (isMenuOpen && css`
      transform: rotate(45deg) translateY(-9px);
    `)}
  }

  &:after {
    bottom:0;

    ${({ isMenuOpen }) => (isMenuOpen && css`
      transform: rotate(-45deg) translateY(9px);
    `)}
  }

`;
