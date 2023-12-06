import { useState } from 'react'
import './App.css'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'

function App() {
   const {date} = useClock();
   console.log(date)
   return (
      <div>
          <h1>Track Zone</h1>
          <LocalClock/>
          <ClockList/>
      </div>
   )
}

export default App
