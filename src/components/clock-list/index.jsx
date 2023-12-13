import ClockListItem from "./clock-list-item";

const ClockList = ({clocks, updateClock}) => {
    console.log(clocks);
    return (
        <div>
            <h3>Other Clocks</h3>
            <hr/>
            {
               clocks.length  === 0 ? (
                    <p>There is no clock, please create new clock.</p>
                ) : (
                    <div>
                        {clocks.map((clock) =>(
                            <ClockListItem 
                                key={clock.id} 
                                clock={clock}
                                updateClock={updateClock}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default ClockList;