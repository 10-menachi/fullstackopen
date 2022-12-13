import { useEffect, useState } from "react"
import Note from "./components/Note"
import notes from "./services/notes"

function App() {

  const [notes_array, set_notes_array] = useState([])
  const [new_note, set_new_note] = useState('')
  const [show_all, set_show_all] = useState(false)


  useEffect(() => {
    notes.getNotes().then(response => set_notes_array(response.data))
  }, [])

  const notes_to_show = show_all 
        ? notes_array 
        : notes_array.filter(note => note.important)

  const add_new_note = (event) => {
    event.preventDefault()
    const new_note_object = {
      content: new_note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes_array.length + 1,
    }
    notes.addNote(new_note_object).then(response => {
      set_notes_array(notes_array.concat(response.data))
      set_new_note('')
    })
  }

  

  function toggleImportanceOf (id) {
    const note = notes_array.find(note => note.id === id)
    const changed_note = {...note, important: !note.important}

    notes.update_note(id, changed_note).then(response => {
      set_notes_array(notes_array.map(note => note.id !== id ? note : response.data))
    })

  }

  return (
    <div>
      <h1>Notes</h1>

      <button onClick={() => set_show_all(!show_all)}>
        show {show_all? 'Important' : 'All'}
      </button>
      <ul>
        {notes_to_show.map((note, index) => <Note key={index} note={note} toggleImportance={toggleImportanceOf} />)}
      </ul>

      <form onSubmit={add_new_note}>
        <input type='text' value={new_note} onChange={(event) => set_new_note(event.target.value)} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App
