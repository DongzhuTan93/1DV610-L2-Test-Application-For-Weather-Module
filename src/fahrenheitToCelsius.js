/**
 * Represents temperatures in fahrenheit to celsius.
 *
 */
export class FahrenheitToCelsius {
  /**
   * Represents temperatures in Fahrenheit to celsius.
   *
   * @param {number} temperatureF The temperatures in Fahrenheit to counting.
   */
  constructor (temperatureF) {
    this.temperatureF = temperatureF
  }

  /**
   * Converts Fahrenheit to Celsius.
   *
   * @returns {number} The temperatures in celsius.
   */
  countFahrenheitToCelsius () {
    return Number((((this.temperatureF - 32) * 5) / 9).toFixed(1))
  }
  // Inspiration: https://www.cuemath.com/questions/what-is-25-degrees-celsius-in-fahrenheit/
}
