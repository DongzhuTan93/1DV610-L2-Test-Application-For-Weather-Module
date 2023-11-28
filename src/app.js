/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { AverageTemperature } from './averageTemperature.js'
import { AverageHumidity } from './averageHumidity.js'

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

    const oneWeeksHumidity = [62, 62, 67, 85, 97, 78, 91]
    const humidityCalculator = new AverageHumidity(oneWeeksHumidity)
    const averageHumidityForTheWeek = humidityCalculator.countAverageHumidity()

    console.log('The average humidity for the week is about: ' + averageHumidityForTheWeek + '%')
  } catch (error) {
    console.error(error.message)
  }
}

main()
