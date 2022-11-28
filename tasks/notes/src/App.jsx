import { useState } from "react"
import Note from "./components/Note"

function App({ notes }) {

  const [notes_array, set_notes_array] = useState(notes)
  const [new_note, set_new_note] = useState('')

  const add_new_note = (event) => {
    event.preventDefault()
    const new_note_object = {
      content: new_note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    set_notes_array(notes_array.concat(new_note_object))
    set_new_note('')
    console.log(notes_array);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes_array.map((note, index) => <Note key={index} note={note.content} />)}
      </ul>

      <form onSubmit={add_new_note}>
        <input type='text' value={new_note} onChange={(event) => set_new_note(event.target.value)} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App
