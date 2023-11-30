/**
 * Repersent a weather module class.
 */
export class WeatherModule {
  /**
   * Represent a weatherModule constructor.
   *
   * @param {Array} temperaturesInKelvin The input temperatures data.
   * @param {Array} humidities The input humidities data.
   * @param {Array} windSpeeds The input windSpeeds data.
   */
  constructor (temperaturesInKelvin, humidities, windSpeeds) {
    this.temperaturesInKelvin = temperaturesInKelvin
    this.humidities = humidities
    this.windSpeeds = windSpeeds
  }

  /**
   * Calculate average temperaturesInKelvin for the next 40 days.
   *
   * @param {Array} temperaturesInKelvin Array containing temperaturesInKelvin for the next 40 days.
   * @returns {string} 40 days average temperatures in celsius.
   */
  async countAverageTemperature (temperaturesInKelvin) {
    const temperatureStrings = temperaturesInKelvin.map(temp => `${temp}K`).join('. ')
    console.log('The temperature in kelvin for the next 40 days are: ' + temperatureStrings) // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

    // Convert each temperature from Kelvin to Celsius before summing
    const temperaturesInKelvinSum = temperaturesInKelvin.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    console.log('temperaturesInKelvinSum is: ' + temperaturesInKelvinSum)
    console.log('type of temperaturesInKelvinSum is: ' + temperaturesInKelvinSum)

    const averageTemperatureKelvin = temperaturesInKelvinSum / temperaturesInKelvin.length
    console.log('!!result averageTemperatureKelvin is :' + averageTemperatureKelvin)
    console.log('!!type of averageTemperatureKelvin is :' + typeof averageTemperatureKelvin)

    const averageTemperatureCelsius = Number(this.convertKelvinToCelsius(averageTemperatureKelvin).toFixed(1))
    console.log('type of averageTemperatureCelsius is ' + typeof averageTemperatureCelsius)

    // Calculation results are kept to one decimal place.
    return averageTemperatureCelsius + '°C'
  }

  /**
   * Calculate the average humidity for the next 40 days.
   *
   * @param {string} humidities Array containing humidity for the next 40 days.
   * @returns {number} 40 days average humidity.
   */
  async countAverageHumidity (humidities) {
    const humiditieStrings = humidities.map(temp => `${temp}%`).join('. ')
    console.log('The humidities for the next 40 days are: ' + humiditieStrings)

    const humiditySum = humidities.reduce((acc, curr) => acc + curr, 0)
    const averageHumidity = humiditySum / humidities.length

    // Calculation results are kept to one decimal place.
    return Number(averageHumidity.toFixed(1)) + '%'
  }

  /**
   * Calculate the average wind speed for the next 40 days.
   *
   * @param {Array} windSpeeds Array containing wind speed for the next 40 days.
   * @returns {string} 40 days average wind speed.
   */
  async countAverageWindSpeed (windSpeeds) {
    const windStrings = windSpeeds.map(temp => `${temp}m/s`).join('. ')
    console.log('The wind speed for the next 40 days are: ' + windStrings)

    const windSpeedSum = windSpeeds.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageWindSpeed = windSpeedSum / windSpeeds.length

    // Calculation results are kept to one decimal place.
    return Number(averageWindSpeed.toFixed(1)) + 'm/s'
  }

  /**
   * Convert temperature Kelvin to Celsius.
   *
   * @param {string} averageTemperatureKelvin Temperature in kelvin.
   * @returns {string} The temperatures in celsius.
   */
  convertKelvinToCelsius (averageTemperatureKelvin) {
    return averageTemperatureKelvin - 273.15 // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
  }

  /**
   * Calculate the maximum rainfall for the next 40 days.
   *
   * @param {Array} rainfallData  Array containing rainfall for the next 40 days.
   * @returns {string} Maximum rainfall in mm.
   */
  async countMaximumRainfall (rainfallData) {
    const rainfallDataStrings = rainfallData.map(temp => `${temp}mm`).join('. ')
    console.log('The rainfall for the next 40 days are: ' + rainfallDataStrings)
    const maxRainfall = Math.max(...rainfallData.map(item => item && item['3h'] ? item['3h'] : 0))
    return maxRainfall || 0
  }
}
