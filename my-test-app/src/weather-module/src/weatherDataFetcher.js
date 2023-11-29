/**
 * Fetch 5 days weather data.
 */
export class WeatherDataFetcher {
  /**
   * Represent a WeatherDataFetcher constructor.
   *
   * @param {string} apiKey My api key to feth data.
   */
  constructor (apiKey) {
    this.apiKey = apiKey
  }

  /**
   * Get citys coordinate.
   *
   * @param {string} country This is the designated country.
   * @param {string} city The weather of a certain city in this country.
   * @returns {string} The citys coordinate.
   */
  async getCoordinates (country, city) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${this.apiKey}`)
    const data = await response.json()
    if (!response.ok || data.length === 0) {
      throw new Error('City not found or invalid country code')
    }
    return data[0]
  }

  /**
   * Represent citys lat, lon.
   *
   * @param {string} lat The citys lat.
   * @param {string} lon The citys lon.
   * @returns {string} the citys coordinate.
   */
  async fetchFiveDaysWeatherForecast (lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
    const data = await response.json()
    return data
  }
}
