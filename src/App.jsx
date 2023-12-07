import { useState } from 'react'
import './App.css'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'

function App() {
   const {date, localTimezone, localOffset} = useClock();
   
   return (
      <div>
          <h1>Track Zone</h1>
          <LocalClock 
            date={date}
            timezone={localTimezone}
            offset={localOffset}
          />
          <ClockList/>
      </div>
   )
}

export default App
