import styled from 'styled-components'

export const StyledSidebar = styled.div`
  position: absolute;
  padding-top: 20px;
  height: 100%;
  left: 0;
  width: ${({ opened }) => opened ? '282px' : '52px'};
  background: #08080c;
  color: white;
`

export const StyledItem = styled.div`
  cursor: pointer;
`

export const StyledCloseButton = styled.img`
  float: right;
  padding-right: 12px;
  padding-top: 2px;
`