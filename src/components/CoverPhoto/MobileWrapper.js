import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

export default styled.div`
  ${from('tablet')(css`
    display:none;
  `)}
`;
