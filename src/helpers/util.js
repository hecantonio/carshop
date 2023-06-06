
export const addMinutesDate = (minutes) => {
    let currentDateObj = new Date();
    let numberOfMlSeconds = currentDateObj.getTime();
    let addMlSeconds = minutes * 60000;
    return new Date(numberOfMlSeconds + addMlSeconds);
}