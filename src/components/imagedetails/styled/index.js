import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.3); /* Black w/ opacity */
    backdrop-filter: blur(5px);
`;

export const StyledImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 700px;
    transition: all 2s ease-in-out;
    &:hover {
        transform: scale(1.005) translate(-50%, -50%);
    }
    cursor: pointer;
`;
