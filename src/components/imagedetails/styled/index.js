import styled from 'styled-components';

export const ImageContainer = styled.div`
    max-height: 100%;
`;

export const StyledImage = styled.img`
    max-width: 70%;
    transition: all 2s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }
    cursor: pointer;
`;
