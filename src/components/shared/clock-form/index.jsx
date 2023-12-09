/**
 * for local formValues title won't be change.
 * to create a new formValues we have to create title, timezone, offset.
 * to edit a formValues we will have title, timezone, offset.
 */

import { useState } from "react";
import { getOffsets } from "../../../utils/timezone";

const formValuesForm = ({ values, handleformValues, title=true, edit=false }) => {
    const [formValues, setFormValues] = useState({...values});
    
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
        handleformValues(formValues);
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
                    disabled={!title}
                />
            </div>
            <div>
                <label htmlFor="timezone">Enter Your Timezone</label>
                <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    value={formValues.timezone}
                    onChange={handleChange}
                />
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
            <button>{edit ? 'Update' : 'Create'}</button>
        </form>
    )
};

export default formValuesForm;