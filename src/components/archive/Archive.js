import React from 'react';
import { useDispatch } from 'react-redux'
import { StyledSidebar, StyledTitleItem, StyledItem, StyledCloseButton, StyledTitle, StyledSubTitle, StyledHambItem, StyledCurrentSelectedItem } from './styled'
import { requestArchive, setArchiveYear, setArchiveMonth } from '../../store/actions'
import MenuIcon from '../../icons/menu-icon.svg'
import CloseIcon from '../../icons/close-icon.svg'

const Calendar = ({ onLoad }) => {
  const [year, setYear] = React.useState(null)
  const [month, setMonth] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (month && months.indexOf(month) >= 0) {
      const mindex = (months.indexOf(month) + 1).toString()
      setTimeout(() => {
        onLoad(false)
      }, 1000)
      dispatch(requestArchive({year, month: mindex}))
        dispatch(setArchiveMonth(mindex))
    }
  // eslint-disable-next-line
  }, [month])

  React.useEffect(() => {
    dispatch(setArchiveYear(year))
  }, [year])

  const years = ["2019", "2020"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const itemBlock = (items, handleOnClick) => items.map((item, index) => (
      <StyledItem onClick={() => handleOnClick(item)} key={item} index={index + 1}>
        <span>{item}</span>
      </StyledItem>
    )
  )

  return (
    <>
      {year && (
        <StyledCurrentSelectedItem onClick={() => setYear(null)}>
          <StyledSubTitle>{year} {month ? month: null}</StyledSubTitle>
        </StyledCurrentSelectedItem>
      )}
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
              <Calendar onLoad={setOpened} />
            </>
          )
          : (
            <StyledHambItem onClick={() => handleSidebar(!opened)}>
              <img src={MenuIcon} alt='Menu' />
            </StyledHambItem>
          )
      }
    </StyledSidebar>
  )
}
