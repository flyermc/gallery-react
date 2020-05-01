import styled, { css } from 'styled-components';

export const StyledImageContainer = styled.div`
    ${({width, height, number}) => width > height && number !== 4 && css`
        text-indent: -140px;
    ` }
`;

export const StyledImage = styled.img`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    transition: all .2s ease-in-out;
    filter: grayscale(100%);
    &:hover {
        -webkit-filter: none;
        filter: none;
        transform: scale(1.02);
    };
    cursor: pointer;
`;