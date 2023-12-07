import ClockList from "../clock-list";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({date: localDate, timezone, offset}) => {
    return (
        <div>
        {
            localDate !== null && (
                <ClockDisplay
                date={localDate}
                title= {'My Clock'}
                timezone={timezone}
                offset={offset}
            />
            )
        }
        </div>
    )
};

export default LocalClock;