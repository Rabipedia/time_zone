import { useState } from "react";
import ClockForm from "../clock-form";

const ClockActions = ({local = false, clock, updateLocalClock, createClock}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

    const handleClock = (values) => {
        createClock(values);
    }

   
    return (
        <div>
            <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>
            {
                local ? <button onClick={()=> setIsCreate(!isCreate)}>Create</button> : <button>Delete</button>
            }
            {
                isEdit  && (
                   <>
                     <h3>Update Your Clock</h3>
                     <ClockForm
                        values={clock}
                        handleClock={updateLocalClock}
                        title={!local}
                        edit={true}
                    />
                   </>
                   )
            }
            {
                isCreate && (
                    <>
                        <h3>Create A New Clock</h3>
                        <ClockForm
                            handleClock={handleClock}
                        />
                    </>
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