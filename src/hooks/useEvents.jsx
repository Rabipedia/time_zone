import { useState } from "react";
import shortid from "shortid";

const useEvents = () => {
    const [state, setState] = useState([]);

    const getEventsByClockId = (clockId) => {
       return Object.keys(state).filter((item) =>item.startsWith(clockId));
    }

    const getEvents = () => state;

    const addEvent = (event) => {
        event.id = shortid.generate();
        setState((prev) => ({
            ...prev,
            [`${event.clockId}|${event.id}`]: event
        }))
    };

    const deleteEvent = (id) => {
        const events = { ...state };
        delete events[id];
        setState(events);
    };

    const deleteEventByClock = (clockId) => {
        const events = Object.keys(state).filter((item) => !item.startsWith(clockId));
        setState(events);
    }

    const updateEvent = (updateEvent, id) => {
        const events = { ...state };
        events[id] = {
            ...events[id],
            ...updateEvent
        }
        setState(events);
    }

    return {
        getEventsByClockId,
        getEvents,
        addEvent,
        deleteEvent,
        deleteEventByClock,
        updateEvent
    }
}

export default useEvents;