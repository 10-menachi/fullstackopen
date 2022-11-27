import React from 'react'

function Button({text, setter}) {
  return (
    <button onClick={setter}>{text}</button>
  )
}

export default Button