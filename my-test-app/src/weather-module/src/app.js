/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { weatherModule } from './weatherModule'
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
    const weatherDataList = weatherData.list

    const averageTemperature = weatherModule.countAverageTemperature(weatherDataList)
    console.log('The average temperature for the next 5 days is about: ' + averageTemperature + '°C')

    const averageHumidity = weatherModule.countAverageHumidity(weatherDataList)
    console.log('The average humidity for the next 5 days is about is about: ' + averageHumidity + '%')

    const temperatureInKelvin = weatherData.list[0].main.temp
    const temperatureInCelsius = weatherModule.convertKelvinToCelsius(temperatureInKelvin)
    console.log(`${temperatureInKelvin} is equal to ${temperatureInCelsius}°C`)

    const averageWindSpeed = weatherModule.countAverageWindSpeed(weatherDataList)
    console.log('The average wind speed for the next 5 days is about is about is about: ' + averageWindSpeed + ' m/s')

    /* return {
      averageTemperature,
      averageHumidity,
      averageWindSpeed,
      temperatureInCelsius
    } */
  } catch (error) {
    console.error(error.message)
  }
}

main()
