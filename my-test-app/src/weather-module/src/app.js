/**
 * Where the application starts.
 *
 * @author Dongzhu Tan <dt222ha@student.lnu.se>
 */

import { WeatherModule } from './weatherModule.js'
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

    // Save corresponding to an array and sent it to corresponding function.
    const weatherDataList = weatherData.list
    const temperatures = weatherDataList.map(item => item.main.temp)
    const humidities = weatherDataList.map(item => item.main.humidity)
    const windSpeeds = weatherDataList.map(item => item.wind.speed)

    const weatherModule = new WeatherModule(temperatures, humidities, windSpeeds)

    const averageTemperature = weatherModule.countAverageTemperature()
    console.log('The average temperature for the next 5 days is about: ' + averageTemperature + '°C')

    const temperatureToCelsius = weatherModule.convertKelvinToCelsius(temperatures[0])
    console.log(`${temperatures[0]} is equal to ${temperatureToCelsius}°C`)

    const averageHumidity = weatherModule.countAverageHumidity()
    console.log('The average humidity for the next 5 days is about is about: ' + averageHumidity + '%')

    const averageWindSpeed = weatherModule.countAverageWindSpeed()
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
