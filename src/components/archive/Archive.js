import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { archiveYearSelector, archiveMonthSelector } from '../../selectors/imagesSelector'
import {
  StyledSidebar,
  StyledTitleItem,
  StyledItem,
  StyledBackButton,
  StyledTitle,
  StyledHambItem,
  StyledCurrentSelectedItem,
  StyledCollapsedButton,
    StyledMenuItem,
} from './styled'
import { requestArchive, setArchiveYear, setArchiveMonth } from '../../store/actions'
import MenuIcon from '../../icons/menu-icon.svg'
import BackIcon from '../../icons/back-icon.svg'
import CollapsedIcon from '../../icons/collapsed-icon.svg'
import ExpandedIcon from '../../icons/expanded-icon.svg'

const Calendar = React.memo(() => {
  const yearFromStore = useSelector(archiveYearSelector)
  const [year, setYear] = React.useState(yearFromStore)
  const [month, setMonth] = React.useState(useSelector(archiveMonthSelector))
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (month && months.indexOf(month) >= 0) {
      const mindex = (months.indexOf(month) + 1).toString()
      dispatch(requestArchive({year, month: mindex}))
      dispatch(setArchiveYear(year))
      dispatch(setArchiveMonth(month))
    }
  // eslint-disable-next-line
  }, [month])

  const handleYearClick = (item) => {
    year === item ? setYear(null) : setYear(item)
  }

  const years = ["2019", "2020"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const selectedCell = (item, inner) => {
    return (
      <StyledCurrentSelectedItem>
        <StyledMenuItem inner={inner}>{item}</StyledMenuItem>
      </StyledCurrentSelectedItem>
    )
  }

  const regularCell = (item, inner, handleClick, index) => {
    return (
      <StyledItem onClick={() => handleClick(item)} key={item} index={index}>
        { !inner &&  <StyledCollapsedButton src={year && year === item ? ExpandedIcon : CollapsedIcon} alt='Click this' /> }
        <StyledMenuItem inner={inner}>{item}</StyledMenuItem>
      </StyledItem>
    )
  }

  const itemBlock = (items, handleOnClick, inner=false) => items.map((item, index) => {
    return (
      <>
        {
          inner && months.indexOf(month) == index && year === yearFromStore
            ? selectedCell(item, inner)
            : regularCell(item, inner, handleOnClick, index + 1)
        }
        { year === item && itemBlock(months, setMonth, true) }
      </>
    )}
  )

  return itemBlock(years, handleYearClick)
})

export const Archive = React.memo(() => {
  const [opened, setOpened] = React.useState(false)
  const sidebarRef = React.useRef(null)

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
                <StyledBackButton src={BackIcon} alt='Close' />
              </StyledTitleItem>
              <Calendar ref={sidebarRef} />
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
})
