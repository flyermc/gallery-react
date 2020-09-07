import React from 'react';
import { StyledSidebar, StyledItem, StyledCloseButton } from './styled'
import MenuIcon from '../../icons/menu-icon.svg'
import CloseIcon from '../../icons/close-icon.svg'

export const Archive = () => {
  const [opened, setOpened] = React.useState(false)

  const handleSidebar = (state) => {
    setOpened(state)
  }

  return (
    <StyledSidebar opened={opened}>
      {
        opened
          ? (
            <StyledItem onClick={() => handleSidebar(!opened)}>
              <StyledCloseButton src={CloseIcon} alt='Close' />
            </StyledItem>
          )
          : (
            <StyledItem onClick={() => handleSidebar(!opened)}>
              <img src={MenuIcon} alt='Menu' />
            </StyledItem>
          )
      }
    </StyledSidebar>
  )
}