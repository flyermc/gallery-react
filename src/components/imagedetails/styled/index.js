import styled from 'styled-components';

export const ImageContainer = styled.div`

`;

export const StyledImage = styled.img`
    max-height: 700px;
    transition: all 2s ease-in-out;
    &:hover {
        transform: scale(1.01);
    }
    cursor: pointer;
`;
