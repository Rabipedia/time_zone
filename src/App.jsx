import { useState } from 'react'
import './App.css'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'
import ClockActions from './components/shared/clock-actions'

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
          <ClockActions/>
      </div>
   )
}

export default App
