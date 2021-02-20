// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = (drivers) => {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) => {
    return () => {
        return value *= value
    }
}

const fareDoubler = (fare) => {return fare * 2}
const fareTripler = (fare) => {return fare * 3}

const selectDifferentDrivers = ((arrayOfDrivers, func) => {
    return func(arrayOfDrivers)
})