import React, { useState } from 'react'

import { DtPicker } from 'react-datetime-picker'
import 'react-datetime-picker/dist/index.css'

const App = () => {
  // const day = new Date(1999, 1, 12)
  // const day = new Date(2015, 6, 15)
  // const day = new Date(1991, 5, 29)
  // const day = new Date(2015, 0, 15)
  // const day = new Date(2009, 11, 1)
  // const day = new Date(1984, 1, 25)
  // const day = new Date(2000, 11, 9)
  // const [dateEn, setDateEn] = useState()
  // const [dateEn2, setDateEn2] = useState()
  // const [dateEn3, setDateEn3] = useState()
  // const [dateFa, setDateFa] = useState()
  // const [dateEn, setDateEn] = useState({ year: 1398, month: 8, day: 1 })
  // const [dateEn, setDateEn] = useState({
  //   from: { year: 2012, month: 5, day: 2 },
  //   to: { year: 2012, month: 5, day: 23 }
  // })
  // const [dateEn, setDateEn] = useState({
  //   from: { year: 2008, month: 8, day: 2, minutes: 33 },
  //   to: { year: 2008, month: 8, day: 6, hours: 12 }
  // })
  // const [dateFa, setDateFa] = useState({
  //   from: { year: 1395, month: 0, day: 2, minutes: 33 },
  //   to: { year: 1395, month: 0, day: 6, hours: 12 }
  // })
  // const [date, setDate] = useState({
  //   from: null,
  //   to: null
  // })
  // const [dateEn, setDateEn] = useState([
  //   {
  //     year: 2012,
  //     month: 5,
  //     day: 29,
  //     hours: 18,
  //     minutes: 11
  //   },
  //   {
  //     year: 2012,
  //     month: 5,
  //     day: 2,
  //     hours: 18,
  //     minutes: 11
  //   },
  //   {
  //     year: 2012,
  //     month: 6,
  //     day: 3,
  //     hours: 18,
  //     minutes: 11
  //   }
  // ])
  // const [dateFa, setDateFa] = useState([
  //   {
  //     year: 1399,
  //     month: 5,
  //     day: 25,
  //     hours: 18,
  //     minutes: 11
  //   },
  //   {
  //     year: 1399,
  //     month: 5,
  //     day: 1,
  //     hours: 18,
  //     minutes: 11
  //   }
  // ])
  // const [date, setDate] = useState({
  //   year: 2000,
  //   month: 0,
  //   day: 25
  // })
  // const [date, setDate] = useState({
  //   year: 2000,
  //   month: 5,
  //   day: 25,
  //   hour: 12,
  //   minutes: 15
  // })
  // const [date, setDate] = useState()
  // const [dateEn, setDateEn] = useState({
  //   year: 2010,
  //  month: 3,
  // 23
  // })
  // const maxDate = {
  //   year: 2012,
  //   month: 6,
  //   day: 23
  // }
  // const minDate = {
  //   year: 2012,
  //   month: 5,
  //   day: 2
  // }

  const [dateEn, setDateEn] = useState({
    from: {
      year: 2015,
      month: 6,
      day: 23
    },
    to: {
      year: 2015,
      month: 6,
      day: 23
    }
  })
  const maxDate = {
    year: 2016,
    month: 6,
    day: 23
  }
  const minDate = {
    year: 2012,
    month: 5,
    day: 2
  }
  const handleCalendarClose = () => console.log('Calendar closed')
  const handleCalendarOpen = () => console.log('Calendar opened')
  return (
    <div style={{ margin: 'auto', width: '720px' }}>
      <p>single en with time</p>
      <DtPicker
        onChange={setDateEn}
        defaultValue={dateEn}
        type='range'
        local='en'
        withTime
        showWeekend
        clearBtn
        todayBtn //if min or max date used todayBtn will shows just when it's between min and max
        onCalenderShow={handleCalendarOpen}
        onCalenderHide={handleCalendarClose}
        maxDate={maxDate}
        minDate={minDate}
        // isDisabled
      />
      {JSON.stringify(dateEn, null, 4)}
      <br />
      {/* <p>range en no time</p> */}
      {/* <DtPicker
        onChange={setDateEn2}
        defaultValue={dateEn2}
        type='range'
        local='en'
        showWeekend
      />
      {JSON.stringify(dateEn2, null, 4)}
      <br />

      <p>multi en no time</p>
      <DtPicker
        onChange={setDateEn3}
        defaultValue={dateEn3}
        type='multi'
        local='en'
        showWeekend
      />
      {JSON.stringify(dateEn3, null, 4)}
      <br />
      <br />
      <br />
      <p>range fa with time</p>
      <DtPicker
        onChange={setDateFa}
        defaultValue={dateFa}
        withTime
        type='range'
        local='fa'
        showWeekend
      />
      {JSON.stringify(dateFa, null, 4)} */}
      {/* <DtPicker onChange={setDate} defaultValue={date} /> */}
    </div>
  )
}

export default App
