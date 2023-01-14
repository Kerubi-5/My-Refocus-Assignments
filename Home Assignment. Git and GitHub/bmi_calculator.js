function calculateBMI(weight, height) {
  return weight / Math.pow(height, 2);
}

let weight = 80; // kg
let height = 1.75; // m
let bmi = calculateBMI(weight, height);

console.log(bmi.toFixed(2));
