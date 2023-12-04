import { useState } from 'react'
import './App.css'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'

function App() {
   const {clock: local} = useClock();
   const {clock: est} = useClock('EST');
   const {clock: pst} = useClock('PST');

   console.log('Local UTC', local.date)
   console.log('EST', est.date)
   console.log('PST', pst.date)
   return (
      <div>
          <h1>Track Zone</h1>
          <LocalClock/>
          <ClockList/>
      </div>
   )
}

export default App
