import React from 'react'

function Note({ note, toggleImportance }) {
  const label = note.important
    ? 'Make Not Important'
    : 'Make Important'
  return (
    <div>
      {note.content}
      <button onClick={() => toggleImportance(note.id)}>{label}</button>
    </div>
  )
}

export default Note