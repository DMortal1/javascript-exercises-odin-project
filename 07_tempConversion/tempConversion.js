const convertToCelsius = function(fTemp) {
  return Math.round(10*(fTemp - 32)*5/9)/10;
};

const convertToFahrenheit = function(cTemp) {
  return Math.round(10*(cTemp*9/5 + 32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
