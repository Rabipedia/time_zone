import { useState } from 'react'
import './App.css'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'
import ClockActions from './components/shared/clock-actions'

const LOCAL_CLOCK_INIT = {
   title: '',
   timezone: '',
   offset: 0,
   date: null
}

function App() {
   const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});

   const updateLocalClock = (data) => {
      setLocalClock({
         ...localClock,
         ...data
      })
   }
   
   return (
      <div>
          <h1>Track Zone</h1>
          <LocalClock 
            clock={localClock}
            updateLocalClock={updateLocalClock}
          />
          <ClockList/>
          
      </div>
   )
}

export default App
