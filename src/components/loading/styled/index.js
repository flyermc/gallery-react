import styled, { keyframes } from 'styled-components'

const dotKeyframes = keyframes`
  0% {
    opacity: .4;
    transform: scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: .4;
    transform: scale(1, 1);
  }
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  color: white;

  div {
    animation: ${dotKeyframes} 1.5s infinite ease-in-out;
    background-color: #FFFFFF;
    border-radius: 7px;
    display: inline-block;
    height: 7px;
    width: 7px;
    margin-left: 3px;

    &:nth-child(2) {
      animation-delay: .5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
`

export const LoadingDot = styled.div`
{
    animation: ${dotKeyframes} 1.5s infinite ease-in-out;
    background-color: #000;
    border-radius: 10px;
    display: inline-block;
    height: 10px;
    width: 10px;

    &:nth-child(2) {
      animation-delay: .5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
`


