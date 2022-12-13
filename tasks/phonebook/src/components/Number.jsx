import React from 'react'

function Number({person, delete_contact}) {
  return (
    <div>
        <p>{person.name} {person.number}</p>
        <button onClick={() => delete_contact(person.id)}>Delete Contact</button>
    </div>
  )
}

export default Number