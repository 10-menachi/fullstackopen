import { useEffect, useState } from "react"
import AddNewContact from "./components/AddNewContact"
import Numbers from "./components/Numbers"
import Search from "./components/Search"
import axios from 'axios'

const App = () => {

  const [people, set_people] = useState([])
  const [person, set_person] = useState('')
  const [person_number, set_person_number] = useState('')
  const [search_term, set_search_term] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      set_people(response.data)
    })
  }, [])

  const add_new_contact = (event) => {
    event.preventDefault()
    const new_contact = {
      name: person,
      number: person_number
    }
    if (people.some(person => person.name === new_contact.name)) {
      alert(`${new_contact.name} is already added to phonebook`)
    } else {
      set_people(people.concat(new_contact))
    }
    set_person('')
    set_person_number('')
  }

  const search = (event) => {
    set_search_term(event.target.value)
  }

  return (
    <div className="App">
        <h1>Phonebook</h1>

        <Search search={search} search_term={search_term} />

        <AddNewContact
            add_new_contact={add_new_contact}
            person={person} set_person={set_person}
            person_number={person_number}
            set_person_number={set_person_number} 
          />

        <Numbers people={people} search_term={search_term} />


    </div>
  )
}

export default App

