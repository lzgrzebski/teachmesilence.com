import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

export default styled.span`

  display:none;
 
  ${from('tablet')(css`
    display:inline;
  `)}

`;
