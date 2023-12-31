/**
 * for local formValues title won't be change.
 * to create a new formValues we have to create title, timezone, offset.
 * to edit a formValues we will have title, timezone, offset.
 */

import { useEffect, useState } from "react";
import { getOffsets } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const ClockForm = ({ 
    values = {title: '', timezone: '', offset: 0},
    handleClock,
    title=true, 
    edit=false 
}) => {
    const [formValues, setFormValues] = useState({...values});

    useEffect(()=>{
        if(TIMEZONE_OFFSET[formValues.timezone]){
            setFormValues(prev => ({
                ...prev,
                offset: -TIMEZONE_OFFSET[formValues.timezone]
            }))
        }
    },[formValues.timezone])
    
    const handleChange = (e) => {
            let {name, value} = e.target;
            if(name === 'offset') {
                value = Number(value) * 60;
            }
           setFormValues((prev) => ({
                ...prev,
                [name]: value
           }))
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClock(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.value}
                    onChange={handleChange}
                   // disabled={!title}
                />
            </div>
            <div>
                <label htmlFor="timezone">Enter Your Timezone</label>
                <select 
                    id="timezone"
                    name="timezone" 
                    value={formValues.timezone} 
                    onChange={handleChange}
                >
                    <option value='GMT'>GMT</option>
                    <option value='UTC'>UTC</option>
                    <option value='PST'>PST</option>
                    <option value='EST'>EST</option>
                    <option value='BST'>BST</option>
                    <option value='MST'>MST</option>
                </select>
            </div>
            {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC ') && (
                <div>
                    <label htmlFor="offset">Enter your offset</label>
                    <select
                        id="offset" 
                        name="offset" 
                        value={formValues.offset / 60}
                        onChange={handleChange}
                    >
                        {getOffsets().map((offset) => (
                            <option key={offset}>{offset}</option>
                                    ))}
                    </select>
                </div>
            )}
            <button onClick={handleSubmit}>{edit ? 'Update' : 'Create'}</button>
        </form>
    )
};

export default ClockForm;