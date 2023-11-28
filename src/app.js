/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { AverageTemperature } from './averageTemperature.js'
import { AverageHumidity } from './averageHumidity.js'
import { FahrenheitToCelsius } from './fahrenheitToCelsius.js'
import { AverageWindSpeed } from './averageWindSpeed.js'

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

    const temperatureInFahrenheit = 77
    const temperatureInCelsius = new FahrenheitToCelsius(temperatureInFahrenheit).countFahrenheitToCelsius()
    console.log(`${temperatureInFahrenheit}°F is equal to ${temperatureInCelsius}°C`)

    const oneWeeksWindSpeeds = [7.4, 3.8, 9.1, 5.2, 3.7, 6.1, 6.9]
    const windSpeedCalculator = new AverageWindSpeed(oneWeeksWindSpeeds)
    const averageWindSpeedForTheWeek = windSpeedCalculator.countAverageWindSpeed()
    console.log('The average wind speed for the week is about: ' + averageWindSpeedForTheWeek + ' m/s')
  } catch (error) {
    console.error(error.message)
  }
}

main()
