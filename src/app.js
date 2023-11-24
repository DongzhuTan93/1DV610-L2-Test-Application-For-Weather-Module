/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { AverageTemperature } from './AverageTemperature.js'

/**
 * The main function of the application.
 *
 */
const main = async () => {
  try {
    const oneWeeksTemperature = [3, 0, 4, 2, 1, 3, 4]
    const temperatureCalculator = new AverageTemperature(oneWeeksTemperature)
    const averageTemperatureForTheWeek = temperatureCalculator.countAverageTemperature()

    console.log('The average temperature for the week is about: ' + averageTemperatureForTheWeek + '°C')
  } catch (error) {
    console.error(error.message)
  }
}

main()
