import styled, { css } from 'styled-components';
import { from } from '../services/helpers';

export default styled.main`
  padding-top: 85px;

  ${from('tablet')(css`
    padding-top: 100px;
  `)}
`;
