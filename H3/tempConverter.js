const KELVIN_CONSTANT = 273.15;

function convertToKelvinC(tempCelsius) {
  return tempCelsius + KELVIN_CONSTANT;
}

function convertToKelvinF(tempFahrenheit) {
  return ((tempFahrenheit - 32) * 5) / 9 + KELVIN_CONSTANT;
}
