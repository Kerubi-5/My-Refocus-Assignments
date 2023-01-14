let goalMoney = 10_000; // Money the sam wants to save
let savedMoney = 7_500; // Money that Sam already have

let percentageLeft = (1 - (savedMoney / goalMoney)) * 100; // Formula for getting the percentage needed to complete the target goal

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageLeft}% away from your goal of saving ₱${goalMoney}.`)