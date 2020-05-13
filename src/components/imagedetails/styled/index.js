import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
		transform: scale(1);
	}

	60% {
		transform: scale(1.3);
	}

	100% {
		transform: scale(1);
	}
`;

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
        transform: scale(1.0005) translate(-50%, -50%);
    }
    cursor: pointer;
`;

export const StyledLikeContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
`;

export const StyledLike = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    filter: brightness(0.5);
    animation: ${({empty}) => empty ? pulse : '' } 2s infinite;
    &:hover {
        animation: pulse 2s infinite;
        filter: brightness(1);
        transform: scale(1.3);
    }
`;