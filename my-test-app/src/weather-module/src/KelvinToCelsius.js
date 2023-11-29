/**
 * Represents temperatures in kelvin to celsius.
 *
 */
export class KelvinToCelsius {
  /**
   * Represents kelvin to celsius constructor.
   *
   * @param {number} temperatureInKelvin The temperatures in kelvin to counting.
   */
  constructor (temperatureInKelvin) {
    this.temperatureInKelvin = temperatureInKelvin
  }

  /**
   * Converts kelvin to celsius.
   *
   * @returns {number} The temperatures in celsius.
   */
  countFahrenheitToCelsius () {
    return Number((this.temperatureInKelvin - 237.15).toFixed(1))
  }
  // Inspiration: https://www.metric-conversions.org/temperature/kelvin-to-celsius.htm
}
