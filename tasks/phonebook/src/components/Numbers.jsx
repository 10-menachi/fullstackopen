import React from 'react'
import Number from './Number'

function Numbers({people, search_term, delete_contact}) {

    const filtered_people = people.filter(person => person.name.toLowerCase().includes(search_term.toLowerCase()))
  return (
    <div>
        <h1>Numbers</h1>
        {filtered_people.map((person, index) => <Number key={index} person={person} delete_contact={delete_contact} />)}
    </div>
  )
}

export default Numbers