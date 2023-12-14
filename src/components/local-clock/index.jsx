import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockList from "../clock-list";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock, updateClock, createClock }) => {
    const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

    useEffect(()=>{
        updateClock({
            date,
            offset,
            timezone
        })
    },[date])
    return (
        <div>
            {date && (   
                <ClockDisplay
                    date={date}
                    title= {clock.title}
                    timezone={timezone}
                    offset={offset}
                />  
            )}
            <ClockActions 
                local={true} 
                clock={clock}
                updateClock={updateClock}
                createClock={createClock}
            />    
        </div>
    )
};

export default LocalClock;