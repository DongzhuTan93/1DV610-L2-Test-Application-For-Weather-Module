/**
 * Represents the average humidity.
 *
 */
export class AverageHumidity {
  /**
   * Represents average Humidity constructor.
   *
   * @param {string} humidities The humidities to counting.
   */
  constructor (humidities) {
    this.humidities = humidities
  }

  /**
   * Calculate the average humidity for the next 5 days.
   *
   * @returns {number} 5 days average humidity.
   */
  countAverageHumidity () {
    const humiditySum = this.humidities.reduce((acc, curr) => acc + curr, 0)
    const averageHumidity = humiditySum / this.humidities.length

    // Calculation results are kept to one decimal place.
    return Number(averageHumidity.toFixed(1))
  }
}
