

const convertToCelsius = function(a) {
  let showCelcius = Math.round(((a - 32) * (5 / 9)) * 10) / 10;

  console.log(showCelcius);
  return showCelcius;
};


const convertToFahrenheit = function(b) {
  let showFahrenheit = Math.round((b * (9 / 5) + 32) * 10) / 10;

  console.log(showFahrenheit);
  return showFahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
