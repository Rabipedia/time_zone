import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockList from "../clock-list";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock, updateLocalClock }) => {
    const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

    useEffect(()=>{
        updateLocalClock({
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
                updateLocalClock={updateLocalClock}
            />    
        </div>
    )
};

export default LocalClock;