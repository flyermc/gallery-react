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
    height: 100%;
    width: 100%;
    ${({width, height, number}) => width > height && css`
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
        box-shadow: inset 0 0 0 25px #53a7ea;
    };
    cursor: pointer;
`;

export const FullScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${({imageSrc}) => imageSrc}) no-repeat center center fixed;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;