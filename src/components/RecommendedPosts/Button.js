import styled, { css } from 'styled-components';
import settings from '../../services/settings';
import { from } from '../../services/helpers';

export default styled.button`

  display: inline-block;

  position: relative;
  height: 47px;
  padding: 0 55px;

  color: #fff;
  background-color: transparent;
  border: 3px solid #fff;

  font-size: 19px;
  line-height:35px;
  font-family: tms-header,Georgia,Cambria,"Times New Roman",Times,serif;
  letter-spacing: 1px;

  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: bottom;
  white-space: nowrap;
  text-rendering: auto;
  user-select: none;
  outline: 0;
  box-sizing: border-box;
  border-radius: 999em;

  font-style: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  transition: .1s background-color,.1s border-color,.1s color,.1s fill;

  &:after {
    content: "";
    position:absolute;
    left: 50px;
    right: 50px;
    height: 3px;
    background-color: transparent;
    bottom: 5px;

    transition: background-color 200ms ease-in-out;
  }

  &:active:after {
      background-color: ${settings.colorLinks};
  }

  ${from('desktop')(css`
    &:hover:after {
      background-color: ${settings.colorLinks};
    }
  `)}
`;
