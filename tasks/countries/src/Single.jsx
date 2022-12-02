import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function Single({country}) {
  
  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const time = new Date().getTime()

  const [weather, setWeather] = useState([])

  const fetch_weather = () => {
    
    axios.get(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setWeather(res.data)
      console.log(res.data);
    }).catch(err => console.log(err.message))
  }

  useEffect(fetch_weather, [])

  

  
   
  return (
    <div>
        <h1>{country.name.common}</h1>

        <h3>Capital: {country.capital}</h3>
        <h3>area: {country.area}</h3>

        <h2>Languages</h2>

        <ul>
            {Object.values(country.languages).map((language, index) => <li key={index}>{language}</li>)}
        </ul>

        <h1>{country.flag}</h1>

        <h1>Weather in {country.capital}</h1>

        
    </div>
  )
}

export default Single