/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

/* import { AverageTemperature } from './averageTemperature.js'
import { AverageHumidity } from './averageHumidity.js'
import { FahrenheitToCelsius } from './fahrenheitToCelsius.js'
import { AverageWindSpeed } from './averageWindSpeed.js'
*/
import { WeatherDataFetcher } from './weatherDataFetcher.js'

/**
 * The main function of the application.
 *
 * @param {string} city The input city to fetch.
 * @param {string} country The input country to fetch.
 */
export const main = async (city, country) => {
  try {
    const apiKey = '677d6e7a6780b8cf980ba095587ac1d3'
    const weatherFetcher = new WeatherDataFetcher(apiKey)

    const coordinates = await weatherFetcher.getCoordinates(city, country)
    const weatherData = await weatherFetcher.fetchWeather(coordinates.lat, coordinates.lon)
    console.log(weatherData)

    /* const oneWeeksTemperature = [3, 0, 4, 2, 1, 3, 4]
    const temperatureCalculator = new AverageTemperature(oneWeeksTemperature)
    const averageTemperatureForTheWeek = temperatureCalculator.countAverageTemperature()
    console.log('The average temperature for the next 5 days is about: ' + averageTemperatureForTheWeek + '°C')

    const oneWeeksHumidity = [62, 62, 67, 85, 97, 78, 91]
    const humidityCalculator = new AverageHumidity(oneWeeksHumidity)
    const averageHumidityForTheWeek = humidityCalculator.countAverageHumidity()
    console.log('The average humidity for the next 5 days is about is about: ' + averageHumidityForTheWeek + '%')

    const temperatureInFahrenheit = 77
    const temperatureInCelsius = new FahrenheitToCelsius(temperatureInFahrenheit).countFahrenheitToCelsius()
    console.log(`${temperatureInKelvin}°F is equal to ${temperatureInCelsius}°C`)

    const oneWeeksWindSpeeds = [7.4, 3.8, 9.1, 5.2, 3.7, 6.1, 6.9]
    const windSpeedCalculator = new AverageWindSpeed(oneWeeksWindSpeeds)
    const averageWindSpeedForTheWeek = windSpeedCalculator.countAverageWindSpeed()
    console.log('The average wind speed for the next 5 days is about is about is about: ' + averageWindSpeedForTheWeek + ' m/s') */

    /* return {
      averageTemperatureForFiveDays,
      averageHumidityForFiveDays,
      KelvinToCelsius,
      averageWindSpeedForFiveDays
    } */
  } catch (error) {
    console.error(error.message)
  }
}

main()
