

export function dateToEpoch(date) {
    return Math.floor(date.getTime() / 1000);
}

// Function to convert epoch to date
export function epochToDate(epoch) {
    return new Date(epoch * 1000);
}