import styled, { css } from 'styled-components';
import settings from '../../services/settings';

export default styled.span`

  display: block;
  position: absolute;
  left: ${settings.buttonPad}px;
  right: ${settings.buttonPad}px;
  height: ${(settings.barThickness * 2) + settings.buttonBarSpace}px;
  top: 19px;
  
  &:before,
  &:after {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: ${settings.barThickness}px;
    background-color: #fff;
    content: "";
    transition: transform .3s cubic-bezier(.4,0,0,1);
    transform-origin: center left;
    will-change:transform;

    ${({ isMenuOpen, pinned }) => ((isMenuOpen || pinned) && css`
      background:#555;
    `)}
  }

  &:before {
    top: 0;

    ${({ isMenuOpen }) => (isMenuOpen && css`
      transform: rotate(45deg) translateY(-8px);
    `)}
  }

  &:after {
    bottom:0;

    ${({ isMenuOpen }) => (isMenuOpen && css`
      transform: rotate(-45deg) translateY(8px);
    `)}
  }

`;
