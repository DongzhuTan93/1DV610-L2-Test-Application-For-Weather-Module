/**
 * Calculate the average humidity for the next 5 days.
 *
 * @returns {number} 5 days average humidity.
 */
export function countAverageHumidity () {
  const humiditySum = this.humidities.reduce((acc, curr) => acc + curr, 0)
  const averageHumidity = humiditySum / this.humidities.length

  // Calculation results are kept to one decimal place.
  return Number(averageHumidity.toFixed(1))
}

/**
 * Calculate average temperature for the next 5 days.
 *
 * @returns {number} 5 days average temperature.
 */
export function countAverageTemperature () {
  const temperatureSum = this.temperatures.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const averageTemperature = temperatureSum / this.temperatures.length

  // Calculation results are kept to one decimal place.
  return Number(averageTemperature.toFixed(1))
}

/**
 * Calculate the average wind speed for the next 5 days.
 *
 * @returns {number} 5 days average wind speed.
 */
export function countAverageWindSpeed () {
  const windSpeedSum = this.windSpeeds.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const averageWindSpeed = windSpeedSum / this.windSpeeds.length

  // Calculation results are kept to one decimal place.
  return Number(averageWindSpeed.toFixed(1))
}

/**
 * Converts kelvin to celsius.
 *
 * @returns {number} The temperatures in celsius.
 */
export function countFahrenheitToCelsius () {
  return Number((this.temperatureInKelvin - 237.15).toFixed(1)) // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
}
