import { useEffect, useState } from "react"
import axios from 'axios'
import Search from "./components/Search"
import Countries from "./components/Countries"
const App = () => {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState([])

  const fetch_countries = () => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }

  useEffect(fetch_countries, [])
  

  const filtered_countries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

  
  return (
    <div className="App">

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Countries  countries={filtered_countries} weather={weatherData} />


    </div>
  )
}

export default App
