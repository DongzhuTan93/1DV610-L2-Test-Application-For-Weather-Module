/**
 * Module for calculate the average temperature.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

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
    const temperatureSum = this.temperatures.reduce((acc, curr) => acc + curr, 0)
    const average = temperatureSum / this.temperatures.length

    // Calculation results are kept to one decimal place.
    return Number(average.toFixed(1))
  }
}
