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
 * @returns {string} TReturn the average temperature, humidity, wind speed, temperature to celsius.
 */
export const main = async (city, country) => {
  try {
    const apiKey = '677d6e7a6780b8cf980ba095587ac1d3'
    const weatherFetcher = new WeatherDataFetcher(apiKey)

    const coordinates = await weatherFetcher.getCoordinates(city, country)
    const weatherData = await weatherFetcher.fetchWeatherData(coordinates.lat, coordinates.lon)
    console.log(weatherData)

    // Save corresponding to an array and sent it to corresponding function.
    const weatherDataList = weatherData.list
    const temperatures = weatherDataList.map(item => item.main.temp)
    const humidities = weatherDataList.map(item => item.main.humidity)
    const windSpeeds = weatherDataList.map(item => item.wind.speed)
    const rainfall = weatherDataList.map(item => item.rain)

    const weatherModule = new WeatherModule(temperatures, humidities, windSpeeds, rainfall)

    const averageTemperature = weatherModule.countAverageTemperature(temperatures)
    console.log('The average temperature for the next 5 days is about: ' + averageTemperature + '°C')

    const temperatureToCelsius = weatherModule.convertKelvinToCelsius(temperatures[0])
    console.log(`${temperatures[0]} is equal to ${temperatureToCelsius}°C`)

    const averageHumidity = weatherModule.countAverageHumidity(humidities)
    console.log('The average humidity for the next 5 days is about is about: ' + averageHumidity + '%')

    const averageWindSpeed = weatherModule.countAverageWindSpeed(windSpeeds)
    console.log('The average wind speed for the next 5 days is about is about is about: ' + averageWindSpeed + ' m/s')

    const maxRainfall = weatherModule.countMaximumRainfall(rainfall)
    console.log('The maximum rainfall for the next 5 days is about: ' + maxRainfall + 'mm')

    return {
      averageTemperature,
      averageHumidity,
      averageWindSpeed,
      temperatureToCelsius,
      maxRainfall
    }
  } catch (error) {
    console.error(error.message)
  }
}

main()
