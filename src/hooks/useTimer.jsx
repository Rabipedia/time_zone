import { addSeconds } from "date-fns";
import { useEffect, useState } from "react";

const useTimer = (date) => {
    const [timer, setTimer] = useState(null);
    
    useEffect(() => {
        setTimer(date)
    }, [date]);

    let timerId = null;
    useEffect(() => {
        if(!timer || timer === null) return;

        timerId = setInterval(() => {
            setTimer(addSeconds(timer, 1))
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [timer])

    return timer;
}

export default useTimer;