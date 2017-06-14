import styled, { css } from 'styled-components';
import { from } from '../../services/helpers';

export default styled.div`

    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    padding-left: 15px;
    padding-right: 15px;

    ${from('tablet')(css`
        padding-left: 25px;
        padding-right: 35px;

        height: 70px;
    `)}

    ${({ unfixed }) => (unfixed && css`
        position: absolute;
        transform: translate3d(0, 0, 0);
        transition: background 0.2s ease-in-out;
    `)};

    ${({ unpinned }) => (unpinned && css`
        position: fixed;
        transform: translate3d(0, -100%, 0);
    `)};

    ${({ pinned }) => (pinned && css`
        position: fixed;
        transform: translate3d(0, 0, 0);
        transition: transform 0.2s ease-in-out;
    `)};

    background: ${({ pinned }) => (pinned ? '#fff' : 'transparent')};
    box-shadow: ${({ pinned }) => (pinned ? '0 2px 2px -2px rgba(0,0,0,.15)' : 'none')};

    will-change: transform, background, box-shadow;

`;
