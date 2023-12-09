import { useState } from "react";
import ClockForm from "../clock-form";

const ClockActions = ({local = false, clock, updateLocalClock}) => {
    const [isEdit, setIsEdit] = useState(false);
    const defaultOffsets = [-11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, -5.5, 0, 5, 8.5, 10, 10.5, 11];

    // const handleChange = (e) => {
    //     let {name, value} = e.target;
    //     if(name === 'offset') {
    //         value = Number(value) * 60;
    //     }
    //     updateLocalClock({
    //         [name]: value
    //     })
    // }
    return (
        <div>
            <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>
            {
                local ? <button>Create</button> : <button>Delete</button>
            }
            {
                isEdit  && (
                    <ClockForm
                        values={clock}
                        handleClock={updateLocalClock}
                        title={!local}
                        edit={true}
                    />
                   )
            }
        </div>
    )
};

export default ClockActions;



/**
 *  <div>
                        <input 
                            type='text'
                            name='title' 
                            value={clock.title}
                            onChange={handleChange}
                        />
                        <select 
                            name="timezone" 
                            value={clock.timezone} 
                            onChange={handleChange}
                        >
                            <option value='GMT'>GMT</option>
                            <option value='UTC'>UTC</option>
                            <option value='PST'>PST</option>
                            <option value='EST'>EST</option>
                            <option value='BST'>BST</option>
                        </select>
                        {(clock.timezone === 'GMT' || clock.timezone === 'UTC ') && (
                            <select 
                                name="offset" 
                                value={clock.offset / 60}
                                onChange={handleChange}
                            >
                                {defaultOffsets.map((offset) => (
                                    <option key={offset}>{offset}</option>
                                ))}
                            </select>
                        )}
                    </div>
                
 */