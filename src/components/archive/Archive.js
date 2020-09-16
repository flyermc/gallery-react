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
  StyledGalleryTitle,
  StyledMiniCalendar,
  StyledMiniCalText,
} from './styled'
import { requestArchive, setArchiveYear, setArchiveMonth } from '../../store/actions'
import MenuIcon from '../../icons/menu-icon.svg'
import BackIcon from '../../icons/back-icon.svg'
import CollapsedIcon from '../../icons/collapsed-icon.svg'
import ExpandedIcon from '../../icons/expanded-icon.svg'

const YEARS = ['2019', '2020']
const MONTHS = [
  ['January', 'Jan'],
  ['February', 'Feb'],
  ['March', 'Mar'],
  ['Arpil', 'Apr'],
  ['May', 'May'],
  ['June', 'Jun'],
  ['July', 'Jul'],
  ['August', 'Aug'],
  ['September', 'Sep'],
  ['October', 'Oct'],
  ['November', 'Nov'],
  ['December', 'Dec']
]

const findMonth = (month) => {
    let i;
    console.log(`findMonth ${MONTHS.length}`)
    for (i = 0; i < MONTHS.length; i++) {
        console.log(`index: ${i}`)
        if (MONTHS[i][0] === month) {
            return i
        }
    }
    return -1
}

const Calendar = React.memo(() => {
  const yearFromStore = useSelector(archiveYearSelector)
  const [year, setYear] = React.useState(yearFromStore)
  const [month, setMonth] = React.useState(useSelector(archiveMonthSelector))
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (month && findMonth(month) >= 0) {
      const mindex = findMonth(month) + 1
      dispatch(requestArchive({year, month: mindex.toString()}))
      dispatch(setArchiveYear(year))
      dispatch(setArchiveMonth(month))
    }
  // eslint-disable-next-line
  }, [month])

  const handleYearClick = (item) => {
    year === item ? setYear(null) : setYear(item)
  }

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
          inner && findMonth(month) == index && year === yearFromStore
            ? selectedCell(item, inner)
            : regularCell(item, inner, handleOnClick, index + 1)
        }
        { year === item && itemBlock(MONTHS.map((month) => month[0]), setMonth, true) }
      </>
    )}
  )

  return itemBlock(YEARS, handleYearClick)
})

export const Archive = React.memo(() => {
  const [opened, setOpened] = React.useState(false)
  const year = useSelector(archiveYearSelector)
  const month = useSelector(archiveMonthSelector)

  const handleSidebar = (state) => {
    setOpened(state)
  }

    const shortMonth = React.useRef(null)

    React.useEffect(() => {
        if (month && findMonth(month) >= 0) {
            const index = findMonth(month)
            console.log(`Index: $(index)`)
            shortMonth.current = MONTHS[index][1]
        }
    }, [month, shortMonth])

  return (
    <>
      <StyledSidebar opened={opened}>
        {
          opened
            ? (<>
                <StyledTitleItem onClick={() => handleSidebar(!opened)}>
                  <StyledTitle>Archive</StyledTitle>
                  <StyledBackButton src={BackIcon} alt='Close' />
                </StyledTitleItem>
                <Calendar />
              </>
            )
            : (
              <>
                <StyledHambItem onClick={() => handleSidebar(!opened)}>
                  <img src={MenuIcon} alt='Menu' />
                </StyledHambItem>
                <StyledMiniCalendar>
                  <StyledMiniCalText>{shortMonth.current}</StyledMiniCalText>
                  <StyledMiniCalText>{year}</StyledMiniCalText>
                </StyledMiniCalendar>
              </>
            )
        }
      </StyledSidebar>
    </>
  )
})
