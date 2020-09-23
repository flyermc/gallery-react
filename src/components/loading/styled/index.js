import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  height: 25px;
  width: 25px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 2s infinite ease-in-out;
`
