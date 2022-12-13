import { useEffect, useState } from "react"
import AddNewContact from "./components/AddNewContact"
import Numbers from "./components/Numbers"
import Search from "./components/Search"
import axios from 'axios'
import persons from "./services/persons"

const App = () => {

  const [people, set_people] = useState([])
  const [person, set_person] = useState('')
  const [person_number, set_person_number] = useState('')
  const [search_term, set_search_term] = useState('')

  useEffect(() => {
    persons.get_all_persons().then(response => set_people(response.data))
  })

  const add_contact = (event) => {
    event.preventDefault()
    const new_contact = {
      name: person,
      number: person_number
    }
    if (people.find(peop => peop.name === person)) {
      if (window.confirm(`${person} is already added to phonebook, replace the old number with a new one?`)) {
        const person_to_update = people.find(peop => peop.name === person)
        persons.update_contact(person_to_update.id, new_contact).then(res => {
          alert(`Updated ${person} successfully`)
        })
      }
    } else {
      persons.add_new_contact(new_contact).then(res => {
        set_people(people.concat(res.data))
        set_person('')
        set_person_number('')
      })
    }
  }

  const delete_contact = id => {
    const person = people.find(peop => peop.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      persons.delete_contact(person).then(res => {
        alert(`Deleted ${person.name} successfully`)
      }) 
    }
  }
  const search = (event) => {
    set_search_term(event.target.value)
  }

  return (
    <div className="App">
        <h1>Phonebook</h1>

        <Search search={search} search_term={search_term} />

        <AddNewContact
            add_new_contact={add_contact}
            person={person} set_person={set_person}
            person_number={person_number}
            set_person_number={set_person_number} 
          />

        <Numbers people={people} search_term={search_term} delete_contact={delete_contact} />


    </div>
  )
}

export default App

