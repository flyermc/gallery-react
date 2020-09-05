import styled from 'styled-components'

export const StyledSidebar = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  width: ${({ opened }) => opened ? '250px' : '30px'};
  background: white;
`