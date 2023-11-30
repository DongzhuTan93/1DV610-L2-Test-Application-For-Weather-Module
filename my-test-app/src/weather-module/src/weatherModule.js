/**
 * Calculate the average humidity for the next 5 days.
 *
 * @param {Array} weatherDataList - Array of weather data points.
 * @returns {number} 5 days average humidity.
 */
export function countAverageHumidity (weatherDataList) {
  const humiditySum = weatherDataList.reduce((acc, curr) => acc + curr, 0)
  const averageHumidity = humiditySum / weatherDataList.length

  // Calculation results are kept to one decimal place.
  return Number(averageHumidity.toFixed(1))
}

/**
 * Calculate average temperature for the next 5 days.
 *
 * @param {Array} weatherDataList - Array of weather data points.
 * @returns {number} 5 days average temperature.
 */
export function countAverageTemperature (weatherDataList) {
  const temperatureSum = weatherDataList.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const averageTemperatureKelvin = temperatureSum / weatherDataList.length
  const averageTemperatureCelsius = convertKelvinToCelsius(averageTemperatureKelvin)

  // Calculation results are kept to one decimal place.
  return Number(averageTemperatureCelsius.toFixed(1))
}

/**
 * Calculate the average wind speed for the next 5 days.
 *
 * @param {Array} weatherDataList - Array of weather data points.
 * @returns {number} 5 days average wind speed.
 */
export function countAverageWindSpeed (weatherDataList) {
  const windSpeedSum = weatherDataList.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const averageWindSpeed = windSpeedSum / weatherDataList.length

  // Calculation results are kept to one decimal place.
  return Number(averageWindSpeed.toFixed(1))
}

/**
 * Converts kelvin to celsius.
 *
 * @param {Array} temperatureInKelvin - Array of weather data points.
 * @returns {number} The temperatures in celsius.
 */
export function convertKelvinToCelsius (temperatureInKelvin) {
  return Number((temperatureInKelvin - 237.15).toFixed(1)) // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
}
