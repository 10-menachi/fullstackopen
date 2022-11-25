import React from 'react'
import Part from './Part'

function Content({parts, exercises}) {
  return (
    <div>
        {parts.map((part, i) => <Part key={i} part={part} exercise={exercises[i]} />)}
    </div>
  )
}

export default Content