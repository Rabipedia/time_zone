import useClock from "../../hooks/useClock";
import {addSeconds, formatDistance} from "date-fns"
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({clock, updateClock, deleteClock, localClock}) => {
    const {date} = useClock(clock.timezone, clock.offset);
    const timer = useTimer(date);
   
   
    if(!date || !timer) return null;
    return (
        <div>
            <ClockDisplay
                date={timer}
                timezone={clock.timezone}
                offset={clock.offset}
            />
            <h3>{formatDistance(localClock, timer)}</h3>
            <ClockActions
                clock={clock}
                updateClock={updateClock }
                deleteClock={deleteClock}
            />
        </div>
    )
};

export default ClockListItem;