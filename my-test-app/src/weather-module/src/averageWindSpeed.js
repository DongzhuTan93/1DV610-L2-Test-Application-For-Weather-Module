/**
 * Represents the average wind speed.
 *
 */
export class AverageWindSpeed {
  /**
   * Represents average wind speed constructor.
   *
   * @param {string} windSpeeds The wind speed to counting.
   */
  constructor (windSpeeds) {
    this.windSpeeds = windSpeeds
  }

  /**
   * Calculate the average wind speed for the next 5 days.
   *
   * @returns {number} 5 days average wind speed.
   */
  countAverageWindSpeed () {
    const windSpeedSum = this.windSpeeds.reduce((acc, curr) => acc + curr, 0) // Inspiration: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const averageWindSpeed = windSpeedSum / this.windSpeeds.length

    // Calculation results are kept to one decimal place.
    return Number(averageWindSpeed.toFixed(1))
  }
}
