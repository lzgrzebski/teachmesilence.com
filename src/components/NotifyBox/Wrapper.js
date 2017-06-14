import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';
import settings from '../../services/settings';

export default styled.section`

  background: ${settings.colorLinks};
  width: 100%;
  min-height: 400px;

  display: flex;

  ${from('tablet')(css`
    min-height: 500px;
  `)}
    
`;
