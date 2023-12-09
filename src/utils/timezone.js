export const getOffsets = (start = -11.5, ending = 12) => {
    const offsets = [];
    for(let i=start; i <= ending; i+=.05) {
        offsets.push(i);
    }
    return offsets;
};