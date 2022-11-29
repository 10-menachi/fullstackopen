import React from 'react'

function AddNewContact({add_new_contact, person, set_person, person_number, set_person_number}) {
  return (
    <form onSubmit={add_new_contact}>
        <h1>Add a new contact</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={person} onChange={(event) => set_person(event.target.value)} /> <br />
        <label htmlFor="number">Number: </label> 
        <input type="text" id="number" name="number" value={person_number} onChange={event => set_person_number(event.target.value)} />
        <button type="submit">add</button>
    </form>
  )
}

export default AddNewContact