import styled from 'styled-components';

export default styled.nav`

  position:absolute;
  top:0;
  left:0;

  z-index:3;

  width:100%;
  min-height: 100vh;
  max-height: 100vh;

  padding-left: 60px;
  padding-top: 89px;
  padding-right: 30px;

  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transform: ${({ active }) => (active ? 'translate3d(0, 0px, 0)' : 'translate3d(0, -20px, 0)')};

  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out, visibility 300ms ease-in-out;
  will-change: transform, opacity;
  
  overflow-y: auto;

`;
