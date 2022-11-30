import { useEffect, useState } from "react"
import Note from "./components/Note"
import axios from 'axios'

function App() {

  const [notes_array, set_notes_array] = useState([])
  const [new_note, set_new_note] = useState('')
  const [show_all, set_show_all] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then(response => {
      set_notes_array(response.data)
    })
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
    set_notes_array(notes_array.concat(new_note_object))
    set_new_note('')
  }

  return (
    <div>
      <h1>Notes</h1>

      <button onClick={() => set_show_all(!show_all)}>
        show {show_all? 'Important' : 'All'}
      </button>
      <ul>
        {notes_to_show.map((note, index) => <Note key={index} note={note.content} />)}
      </ul>

      <form onSubmit={add_new_note}>
        <input type='text' value={new_note} onChange={(event) => set_new_note(event.target.value)} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App
