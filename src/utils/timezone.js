import { TIMEZONE_OFFSET } from "../constants/timezone"

export const getOffsets = (start = -11.5, ending = 12) => {
    const offsets = [];
    for(let i=start; i <= ending; i+=.05) {
        offsets.push(i);
    }
    return offsets;
};

export const getTimezone = () => {
    return {
        GMT: 0,
        UTC: 0,
        ...TIMEZONE_OFFSET,
    }
}