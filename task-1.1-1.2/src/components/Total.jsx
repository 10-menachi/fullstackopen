import React from 'react'

function Total({exercises}) {
  return (
    <div>
        <p>Number of exercises {exercises.reduce((a, b) => a + b)}</p>
    </div>
  )
}

export default Total