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

export const StyledTitleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  cursor: pointer;
  padding-bottom: 10px;
`

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 30px;
  height: 45px;
  font-size: 24px;
  cursor: pointer;
  background-color: #1c1c1c;
  margin-bottom: 1px;
  &:hover {
    background-color: #3c3c3c;
  }
`

export const StyledTitle = styled.span`
  margin-right: auto;
  padding-left: 40px;
`

export const StyledCloseButton = styled.img`
  float: right;
  padding-right: 12px;
  padding-top: 2px;
`