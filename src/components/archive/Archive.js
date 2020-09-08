import React from 'react';
import { StyledSidebar, StyledTitleItem, StyledItem, StyledCloseButton, StyledTitle } from './styled'
import MenuIcon from '../../icons/menu-icon.svg'
import CloseIcon from '../../icons/close-icon.svg'

const Calendar = () => {
  const [year, setYear] = React.useState(null)
  const [month, setMonth] = React.useState(null)

  const years = ["2019", "2020"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const itemBlock = (items, callback) => items.map((item) => (
    <StyledItem onClick={() => callback(item)} key={item}>
      <span>{item}</span>
    </StyledItem>
  )
  )

  return (
    <>
      { year
          ? itemBlock(months, setMonth)
          : itemBlock(years, setYear)
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