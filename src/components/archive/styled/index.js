import styled from 'styled-components'

export const StyledSidebar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  width: ${({ opened }) => opened ? '282px' : '52px'};
  background: #263d53;
  color: white;
`

export const StyledHambItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  cursor: pointer;
  font-size: 28px;
  font-weight: bolder;
  background-color: #263d53;
  padding: 5px 0;
`

export const StyledMiniCalendar = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
`

export const StyledMiniCalText = styled.span`
  font-size: 16px;
  &:first-child {
    font-size: 22px;
    font-weight: bolder;
  }
`

export const StyledTitleItem = styled(StyledHambItem)`
  border-bottom: 1px solid;
  margin: 0 40px 10px 40px;
  border-color: #0F263B;
`

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 30px;
  height: 45px;
  font-size: 22px;
  cursor: pointer;
  color: white;
  margin-bottom: 1px;
  &:hover {
    color: #5EACEA;
  }
`
export const StyledCurrentSelectedItem = styled(StyledItem)`
  background-color: #0F263B;
`

export const StyledTitle = styled.span`
  align-items: center;
  justify-content: center;
`

export const StyledBackButton = styled.img`
  position: absolute;
  left: 0;
  padding-left: 12px;
`

export const StyledCollapsedButton = styled.img`
  position: absolute;
  left: 0;
  padding-left: 10px;
`

export const StyledMenuItem = styled.div`
    padding-left: ${({ inner }) => inner ? '20px' : '0'}
`

