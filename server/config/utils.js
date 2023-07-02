export function dateToEpochApi(date) {
    return Math.floor(date.getTime() / 1000);
}

// Function to convert epoch to date
export function epochToDateApi(epoch) {
    return new Date(epoch * 1000);
}