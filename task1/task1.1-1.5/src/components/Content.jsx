import React from 'react'
import Part from './Part'

function Content({parts}) {
  return (
    <div>
        {parts.parts.map(part => <Part key={part.exercises} part={part} />)}
    </div>
  )
}

export default Content