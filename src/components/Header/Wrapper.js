import styled from 'styled-components';

export default styled.header`

  position:absolute;
  top: 0;
  left:0;
  right:0;
  
  z-index:1;

    &:after {
      content: '';
      position: fixed;
      will-change: transform, opacity, visibility;
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
