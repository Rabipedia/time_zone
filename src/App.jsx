import { useState } from 'react'
import './App.css'
import { generate } from 'shortid'
import LocalClock from './components/local-clock'
import ClockList from './components/clock-list'
import useClock from './hooks/useClock'
import ClockActions from './components/shared/clock-actions'

const LOCAL_CLOCK_INIT = {
   title: 'My clock',
   timezone: '',
   offset: 0,
   date: null
}

function App() {
   const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
   const [clocks, setClocks] = useState([]);

   const updateLocalClock = (data) => {
      setLocalClock({
         ...localClock,
         ...data
      })
   };

   const createClock = (clock) => {
      clock.id = generate();
      setClocks([...clocks, clock]);
   };

   const updateClock = (updatedClock) => {
      const updatedClocks = clocks.map(clock => {
         if(clock.id === updatedClock.id) return updatedClock;
         return clock;
      });
      setClocks(updatedClocks);
   }

   const deleteClock = (id) => {
      const updatedClock = clocks.filter(clock => clock.id !== id);
      setClocks(updatedClock)
   }
   
   return (
      <div>
          <h1>Track Zone</h1>
          <LocalClock 
            clock={localClock}
            updateClock={updateLocalClock}
            createClock={createClock}
          />
          <ClockList 
            clocks={clocks}
            localClock={localClock.date}
            updateClock={updateClock} 
            deleteClock={deleteClock} 
         />
          
      </div>
   )
}

export default App
