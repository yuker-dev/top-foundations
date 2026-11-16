function convertToCelsius(deg) {
  let convertedToCelsius = (deg - 32) / 1.8
  return Math.round(convertedToCelsius * 10) / 10
}

function convertToFahrenheit(deg) {
  let convertedToFahrenheit = (deg*1.8) + 32
  return Math.round(convertedToFahrenheit * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
