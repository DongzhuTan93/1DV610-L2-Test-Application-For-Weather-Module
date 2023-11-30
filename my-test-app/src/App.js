import React, { useState } from 'react'
import { main } from "./weather-module/src/app.js"


function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [result, setResult] = useState('')


  const handleWeatherFetch = async () => {
    
    try {
     
      console.log('Submitting city' + city)
      console.log('Submitting country' + country)
      const moudleResult = await main(city, country) // Await the async call
      setResult(moudleResult)
      
    } catch (error) {
      console.error(error)
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
      <p>{result}</p>
    </div>
  )
}

export default App
