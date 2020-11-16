import React from 'react'
import { DAYS_VIEW } from '../../Constant'
import { useViewActions } from '../../store/ViewProvider'
import {
  useCalenderActions,
  useCalenderState
} from '../../store/CalenderProvider'

const years = () => {
  const { changeView } = useViewActions()
  const { changeCalender } = useCalenderActions()
  const calenderState = useCalenderState()
  const { month, day, hours, minutes } = calenderState
  const changeMonth = (newYear: number) => {
    const newDate = {
      year: newYear,
      month: month,
      day: day,
      hour: hours,
      minutes: minutes
    }
    changeCalender({ ...newDate })
    changeView(DAYS_VIEW)
  }
  const yearsRange = () => {
    const yearsList = []
    for (let i = 1900; i <= 2100; i++)
      yearsList.push(
        <li key={i} className='yearList_year' onClick={() => changeMonth(i)}>
          {i}
        </li>
      )
    return yearsList
  }
  return (
    <div className='yearWrapper'>
      <ul className='yearList'>{yearsRange()}</ul>
    </div>
  )
}

export default years
