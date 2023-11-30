import React, { useState } from 'react'
import { main } from "./weather-module/src/app.js"


function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')


  const handleWeatherFetch = async () => {
    try {
      setError('') // Clear any previous errors

      console.log('Submitting city' + city)
      console.log('Submitting country' + country)
      const moudleResult = await main(city, country) // Await the async call
      setResult(moudleResult)
    } catch (error) {
      console.error(error)
      setResult("Sorry, we couldn't fetch the weather data. Please try again later.")
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country code (e.g., SE for Sweden)"
      />
      <button onClick={handleWeatherFetch}>Get Weather</button>
      <p>The result is:</p>
       {/* Display the result or the error message, If result is an object, convert it to a string before rendering */}
       <p>{error || (typeof result === 'object' ? JSON.stringify(result, null, 2) : result)}</p>
      {error && <div className="error-message">{error}</div>}
    </div>
  )
}

export default App
