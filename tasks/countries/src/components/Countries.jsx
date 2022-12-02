import React from 'react'
import Country from './Country'

function Countries({countries}) {

  
  
  return countries.length > 10
          ? <p>Too many matches, specify another filter</p>
          : <div>
            {countries.map((country, index) => <Country key={index} country={country} countries={countries} />)}
          </div>

}

export default Countries