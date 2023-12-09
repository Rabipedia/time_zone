/**
 * for local clock title won't be change.
 * to create a new clock we have to create title, timezone, offset.
 * to edit a clock we will have title, timezone, offset.
 */

import { useState } from "react";

const ClockForm = ({ values, handleClock, title=true, edit=false }) => {
    const [formValues, setFormValues] = useState({...values});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

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
            <div>
                <label htmlFor="offset">Enter your offset</label>
                <input
                    type="text"
                    id="offset"
                    name="offset"
                    value={formValues.offset}
                    onChange={handleChange}
                />
            </div>
            <button>{edit ? 'Update' : 'Create'}</button>
        </form>
    )
};

export default ClockForm;