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
 * @returns {string} Return the average temperature, temperature to celsius, humidity, and wind speed.
 */
export const main = async (city, country) => {
  if (!city || !country) {
    throw new Error('City name and country code are required.')
  }

  try {
    const weatherFetcher = new WeatherDataFetcher(process.env.REACT_APP_API_KEY)
    const coordinates = await weatherFetcher.getCoordinates(city, country)
    const weatherData = await weatherFetcher.fetchWeatherData(coordinates.lat, coordinates.lon)
    console.log(weatherData)

    // Save corresponding to an array and sent it to corresponding function.
    const weatherDataList = weatherData.list
    const temperaturesInKelvin = weatherDataList.map(item => item.main.temp)
    console.log('The length of temperaturesInKelvin is: ' + temperaturesInKelvin.length)
    const humidities = weatherDataList.map(item => item.main.humidity)
    console.log('The length of humidities is: ' + humidities.length)
    const windSpeeds = weatherDataList.map(item => item.wind.speed)
    console.log('The length of windSpeeds is: ' + windSpeeds.length)
    const rainfall = weatherDataList.map(item => item.rain && item.rain['3h'] ? item.rain['3h'] : 0) // Check if item.rain exists and has a property '3h'

    const weatherModule = new WeatherModule(temperaturesInKelvin, humidities, windSpeeds, rainfall)

    const averageTemperature = await weatherModule.countAverageTemperature(temperaturesInKelvin)
    console.log('The average temperature in kelvin for the next 40 days is about: ' + averageTemperature + 'K')

    const averageTemperatureInCelsius = await weatherModule.convertKelvinToCelsius(averageTemperature)
    console.log('The average temperature in kelvin is ' + averageTemperature + 'K' + ' which is around ' + averageTemperatureInCelsius + '°C in Celsius')

    const averageHumidity = await weatherModule.countAverageHumidity(humidities)
    console.log('The average humidity for the next 40 days is around: ' + averageHumidity + '%')

    const averageWindSpeed = await weatherModule.countAverageWindSpeed(windSpeeds)
    console.log('The average wind speed for the next 40 days is around: ' + averageWindSpeed + 'm/s')

    const maxRainfall = await weatherModule.countMaximumRainfall(rainfall)
    console.log('The maximum rainfall for the next 40 days is around: ' + maxRainfall + 'mm')

    return {
      averageTemperature,
      averageTemperatureInCelsius,
      averageHumidity,
      averageWindSpeed,
      maxRainfall
    }
  } catch (error) {
    console.error(error.message)
    throw error
  }
}
