let caloriesPerHour = 450; // 30 mins is 225 calories lost multiplied by 2 which will be converted to 1 hour
let totalHoursCycling = 0.5; // Sam cycles for 30 mins per day (converted to hour is 0.5)
let numOfDaysSamCycles = 15; // Number of days that sam has cycled

let caloriesLost = caloriesPerHour * totalHoursCycling * numOfDaysSamCycles; // calories lost per minute (converted to hour) * duration of workout * days

console.log(`Great work, Sam! After ${totalHoursCycling} hours of cycling every day for a week, you may lose a total of ${caloriesLost} calories`)