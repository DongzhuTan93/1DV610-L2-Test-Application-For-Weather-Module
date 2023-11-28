/**
 * Represents the average temperature.
 *
 */
export class AverageTemperature {
  /**
   * Represents average temperature.
   *
   * @param {string} temperatures The temperature to counting.
   */
  constructor (temperatures) {
    this.temperatures = temperatures
  }

  /**
   * Calculate the average temperature for a week.
   *
   * @returns {number} One weeks average temperature.
   */
  countAverageTemperature () {
    const temperatureSum = this.temperatures.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageTemperature = temperatureSum / this.temperatures.length

    // Calculation results are kept to one decimal place.
    return Number(averageTemperature.toFixed(1))
  }
}
