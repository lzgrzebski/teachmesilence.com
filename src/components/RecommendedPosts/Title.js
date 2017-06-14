import styled, { css } from 'styled-components';
import { fontSize, from } from '../../services/helpers';

import Title from '../Post/Title';

export default styled(Title)`
  color: #fff;
  max-width:700px;
  padding-top:0;

  ${from('tablet')(css`
    ${fontSize('53px')}
    margin-top:8px;
  `)}

`;
