import React from 'react'
import { useState } from 'react'
import Single from '../Single'

function Country({country, countries }) {

    

    
    const [show, setShow] = useState(false)

    

    const show_country = () => {
        setShow(!show)
    }

    
  return countries.length === 1
  ? <Single country={country} /> 
  : (
    <div>
        {country.name.common} <button onClick={show_country}>{show? 'hide' : 'show'}</button>

        {show? <Single country={country} /> : null}
    </div>
    )
}

export default Country