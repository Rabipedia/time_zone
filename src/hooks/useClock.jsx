import { useEffect, useState } from "react";
import {addMinutes} from "date-fns";

const TIMEZONE_OFFSET = {
    PST: -7 * 60,
    EST: -4 * 60
}
const useClock = (timezone, offset=0) => {
    const [localDate, setLocalDate] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [localTimezone, setLocalTimezone] = useState('');
    const [utc, setUTC] = useState(null);

    useEffect(() => {
        let d = new Date();
        const lo = d.getTimezoneOffset();
        d = addMinutes(d, lo);
        setUTC(d);
        setLocalOffset(lo);
    }, []);
    console.log(localOffset)

    useEffect(() => {
        if(utc !== null){
            if(timezone){
                offset = TIMEZONE_OFFSET[timezone] ?? offset;            
                const newUtc = addMinutes(utc, offset);
                setLocalDate(newUtc);
            } else {
                const newUtc = addMinutes(utc, -localOffset);
                const dateStrArr = newUtc.toUTCString().split(' ')
                setLocalDate(newUtc);
                setLocalTimezone(dateStrArr.pop());
                //TODO Find Timezone
            }     
        }
    }, [utc]);


    // console.log(utc)

    return {
        date: localDate,
        dateUtc: utc,
        localOffset,
        localTimezone,
        timezone,
        offset
    }
}

export default useClock;