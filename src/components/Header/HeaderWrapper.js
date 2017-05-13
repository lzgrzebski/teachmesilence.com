import styled from 'styled-components';

export default styled.div`
  height:70px;

  background: ${({ pinned }) => (pinned ? '#fff' : 'transparent')};
  box-shadow: ${({ pinned }) => (pinned ? '0 2px 2px -2px rgba(0,0,0,.15)' : 'none')};
`;
