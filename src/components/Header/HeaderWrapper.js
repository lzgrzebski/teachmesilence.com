import styled, { css } from 'styled-components';

export default styled.div`
  height:70px;
  top: 0;
  left:0;
  right:0;
  z-index:3;

  padding-left:15px;
  padding-right:15px;

  ${({ unfixed }) => (unfixed && css`
      position: absolute;
      transform: translateY(0);
      transition: background 0.2s ease-in-out;
  `)};

  ${({ unpinned }) => (unpinned && css`
      position: fixed;
      transform: translateY(-100%);
  `)};

  ${({ pinned }) => (pinned && css`
      position: fixed;
      transform: translateY(0);
      transition: transform 0.2s ease-in-out;
  `)};

  background: ${({ pinned }) => (pinned ? '#fff' : 'transparent')};
  box-shadow: ${({ pinned }) => (pinned ? '0 2px 2px -2px rgba(0,0,0,.15)' : 'none')};
`;
