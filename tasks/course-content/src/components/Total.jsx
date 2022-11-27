import React from 'react'

function Total({exercises}) {
  
  return (
    <div>
      <p>Number of exercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}</p>
    </div>
  )
}

export default Total