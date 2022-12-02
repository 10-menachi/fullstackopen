import React from 'react'

function Search({searchTerm, setSearchTerm}) {
  return (
    <div>
        Find countries <input type="text" value={searchTerm} onChange={event => {
          setSearchTerm(event.target.value)
        }}
           />
    </div>
  )
}

export default Search