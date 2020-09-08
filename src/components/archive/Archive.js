import React from 'react';
import { StyledSidebar, StyledTitleItem, StyledItem, StyledCloseButton, StyledTitle } from './styled'
import MenuIcon from '../../icons/menu-icon.svg'
import CloseIcon from '../../icons/close-icon.svg'

const Calendar = () => {
  const [year, setYear] = React.useState(null)
  const [month, setMonth] = React.useState(null)

  const years = ["2019", "2020"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <>
      { month
          ? months.map((item) => (
            <StyledItem>
              <span>{item}</span>
            </StyledItem>
          ))
          : years.map((item) => (
            <StyledItem>
              <span>{item}</span>
            </StyledItem>
          ))
      }
    </>
  )
}

export const Archive = () => {
  const [opened, setOpened] = React.useState(false)

  const handleSidebar = (state) => {
    setOpened(state)
  }

  return (
    <StyledSidebar opened={opened}>
      {
        opened
          ? (<>
              <StyledTitleItem onClick={() => handleSidebar(!opened)}>
                <StyledTitle>Archive</StyledTitle>
                <StyledCloseButton src={CloseIcon} alt='Close' />
              </StyledTitleItem>
              <Calendar />
            </>
          )
          : (
            <StyledTitleItem onClick={() => handleSidebar(!opened)}>
              <img src={MenuIcon} alt='Menu' />
            </StyledTitleItem>
          )
      }
    </StyledSidebar>
  )
}