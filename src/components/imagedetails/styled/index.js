import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
    filter: drop-shadow(0 0 0 rgba(255, 255, 255, 1)) brightness(0.6);
	}

	70% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1)) brightness(1);
	}

	90% {
    filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0)) brightness(0.6);
	}

  100% {
    filter: brightness(0.6);
  }
`;

export const ImageContainer = styled.div`
  display: ${({ loading }) => loading ? `none` : `block` }; /* Hidden by default */
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
  transform: translate(-50%, -50%) scale(1);
  height: 90vh;
  widht: auto;
  cursor: pointer;
`;

export const StyledArrowContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100px;
  justify-content: center;
  cursor: pointer;
  ${({ right }) => right ? `right: 0;` : `left: 0;`}
  z-index: 3;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  img {
    opacity: 0.5;
  }
`

export const StyledLikeContainer = styled.div`
  position: absolute; bottom: ${props => props.bottom + 'px'};
  left: 50%;
  z-index: 3;
`;

export const StyledLike = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  filter: brightness(0.5);
  animation: ${({empty}) => empty ? pulse : '' } 2s infinite;
  &:hover {
    filter: brightness(1);
    transform: scale(1.3);
  }
`;

