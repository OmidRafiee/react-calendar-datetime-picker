import React, { ReactElement, useEffect } from 'react'
import { useViewState } from '../../store/ViewProvider'
import { Header, YearsView, MonthsView, DaysView, TimeView } from '../'
import { DAYS_VIEW, MONTHS_VIEW, YEARS_VIEW } from '../../Constant'
import { useSelectedDayState } from '../../store/SelectedDaysProvider'
import { useSelectedTimeState } from '../../store/SelectedTimeProvider'
import { mergeProviders } from '../../Helpers'

const viewsSelector = (
  hasDefaultVal: boolean,
  currentView: string,
  local: string,
  type?: string
) => {
  let view: ReactElement | unknown
  switch (currentView) {
    case YEARS_VIEW:
      view = <YearsView />
      break
    case MONTHS_VIEW:
      view = <MonthsView local={local} />
      break
    case DAYS_VIEW:
      view = (
        <DaysView type={type} local={local} hasDefaultVal={hasDefaultVal} />
      )
      break
    default:
      view = (
        <DaysView type={type} local={local} hasDefaultVal={hasDefaultVal} />
      )
  }
  return view
}
const Wrapper = ({ onChange, type, withTime, local, hasDefaultVal }: any) => {
  const selectedDate = useSelectedDayState()
  const selectedTime = useSelectedTimeState()
  useEffect(() => {
    mergeProviders(type, selectedDate, selectedTime, withTime, onChange)
  }, [selectedDate, selectedTime])

  return (
    <div className='dtWrapper' dir={local === 'fa' ? 'rtl' : 'ltr'}>
      <Header local={local} />
      {viewsSelector(hasDefaultVal, useViewState(), local, type)}
      {withTime && type === 'single' && (
        <TimeView
          timeFor='single'
          initHour={(selectedDate as IDay)?.hours}
          initMinutes={(selectedDate as IDay)?.minutes}
        />
      )}
      {withTime && type === 'range' && (
        <React.Fragment>
          <TimeView
            timeFor='from'
            initHour={(selectedDate as IRange).from?.hours}
            initMinutes={(selectedDate as IRange).from?.minutes}
          />
          <TimeView
            timeFor='to'
            initHour={(selectedDate as IRange).to?.hours}
            initMinutes={(selectedDate as IRange).to?.minutes}
          />
        </React.Fragment>
      )}
    </div>
  )
}

export default Wrapper
