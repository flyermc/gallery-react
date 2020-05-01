import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const StyledImageContainer = styled.div`
    ${({width, height, number}) => width > height && number !== 4 && css`
        text-indent: -140px;
    ` }
`;

export const StyledImage = styled.img`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    animation: 0.5s ${fadeIn} ease-out;
    &:hover {
        -webkit-filter: none;
        filter: none;
        transform: scale(1.01);
    };
    cursor: pointer;
`;