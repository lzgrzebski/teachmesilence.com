import styled, { css } from 'styled-components';

export default styled.header`

  top: 0;
  left:0;
  right:0;

  ${({ unfixed }) => (unfixed && css`
      position: absolute;
      transform: translateY(0);
  `)};

  ${({ unpinned }) => (unpinned && css`
      position: fixed;
      transform: translateY(-100%);
  `)};

  ${({ pinned }) => (pinned && css`
      position: fixed;
      transform: translateY(0);
      transition: all 0.2s ease-in-out;
  `)};

  ${({ active }) => (active && css`
      min-height:100%;
  `)};
  
  will-change:transform;
  z-index:1;

    &:after {
      content: '';
      position: fixed;
      will-change:transform, opacity;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      background: rgba(255, 255, 255, 0.9);
      top: 0;
      left: 0;

      transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

      opacity: ${({ active }) => (active ? 1 : 0)};
      visibility: ${({ active }) => (active ? 'visible' : 'hidden')};

    }

`;
