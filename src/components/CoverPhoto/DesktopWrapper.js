import styled, { css } from 'styled-components';
import { until } from '../../services/helpers';

export default styled.div`
  ${until('tablet')(css`
    display:none;
  `)}
`;
