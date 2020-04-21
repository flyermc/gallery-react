import styled from 'styled-components';

export const StyledImage = styled.img`
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    &:hover {
        -webkit-filter: none;
        filter: none;
    }
`;