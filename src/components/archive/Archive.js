import React from 'react';
import { StyledSidebar } from './styled'

export const Archive = () => {
  const [opened, setOpened] = React.useState(false)

  const handleSidebar = (state) => {
    setOpened(state)
  }

  return (
    <StyledSidebar>
      {
        opened &&
        <div>
          <span>Opened</span>
          <button onClick={() => handleSidebar(false)}>Close</button>
        </div>
      }
      {
        !opened &&
        <button onClick={() => handleSidebar(true)}>Open sidebar</button>
      }
    </StyledSidebar>
  )
}