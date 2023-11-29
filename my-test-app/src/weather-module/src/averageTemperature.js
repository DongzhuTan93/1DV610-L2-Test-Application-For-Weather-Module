/**
 * Represents the average temperature.
 *
 */
export class AverageTemperature {
  /**
   * Represents average temperature constructor.
   *
   * @param {string} temperatures The temperature to counting.
   */
  constructor (temperatures) {
    this.temperatures = temperatures
  }

  /**
   * Calculate average temperature for the next 5 days.
   *
   * @returns {number} 5 days average temperature.
   */
  countAverageTemperature () {
    const temperatureSum = this.temperatures.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageTemperature = temperatureSum / this.temperatures.length

    // Calculation results are kept to one decimal place.
    return Number(averageTemperature.toFixed(1))
  }
}
