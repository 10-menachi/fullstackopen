import React from 'react'
import Number from './Number'

function Numbers({people, search_term}) {

    const filtered_people = people.filter(person => person.name.toLowerCase().includes(search_term.toLowerCase()))
  return (
    <div>
        <h1>Numbers</h1>
        {filtered_people.map((person, index) => <Number key={index} name={person.name} number={person.number} />)}
    </div>
  )
}

export default Numbers