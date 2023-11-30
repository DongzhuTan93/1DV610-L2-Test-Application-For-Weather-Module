/**
 * Repersent a weather Module class.
 */
export class WeatherModule {
  /**
   * Represent a weatherModule constructor.
   *
   * @param {string} temperatures The input temperatures data.
   * @param {string} humidities The input humidities data.
   * @param {string} windSpeeds The input windSpeeds data.
   */
  constructor (temperatures, humidities, windSpeeds) {
    this.temperatures = temperatures
    this.humidities = humidities
    this.windSpeeds = windSpeeds
  }

  /**
   * Calculate average temperature for the next 5 days.
   *
   * @param {Array} temperatures Array containing temperature for the next 5 days.
   * @returns {number} 5 days average temperature.
   */
  countAverageTemperature (temperatures) {
    console.log('The temperature for the next 5 days are: ' + temperatures.join() + 'K') // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    const temperatureSum = temperatures.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageTemperatureKelvin = temperatureSum / temperatures.length
    const averageTemperatureCelsius = this.convertKelvinToCelsius(averageTemperatureKelvin)

    // Calculation results are kept to one decimal place.
    return Number(averageTemperatureCelsius.toFixed(1))
  }

  /**
   * Calculate the average humidity for the next 5 days.
   *
   * @param {string} humidities Array containing humidity for the next 5 days.
   * @returns {number} 5 days average humidity.
   */
  countAverageHumidity (humidities) {
    console.log('The humidities for the next 5 days are: ' + humidities.join() + '%')
    const humiditySum = humidities.reduce((acc, curr) => acc + curr, 0)
    const averageHumidity = humiditySum / humidities.length

    // Calculation results are kept to one decimal place.
    return Number(averageHumidity.toFixed(1))
  }

  /**
   * Calculate the average wind speed for the next 5 days.
   *
   * @param {Array} windSpeeds Array containing wind speed for the next 5 days.
   * @returns {number} 5 days average wind speed.
   */
  countAverageWindSpeed (windSpeeds) {
    console.log('The wind speed for the next 5 days are: ' + windSpeeds.join() + 'm/s')
    const windSpeedSum = windSpeeds.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageWindSpeed = windSpeedSum / windSpeeds.length

    // Calculation results are kept to one decimal place.
    return Number(averageWindSpeed.toFixed(1))
  }

  /**
   * Convert temperature Kelvin to Celsius.
   *
   * @param {Array} temperatureInKelvin Temperature in kelvin.
   * @returns {number} The temperatures in celsius.
   */
  convertKelvinToCelsius (temperatureInKelvin) {
    return Number((temperatureInKelvin - 273.15).toFixed(1)) // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
  }
}
