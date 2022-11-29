import React from 'react'

function Search({search, search_term}) {
  return (
    <div>
        <form id="search" onSubmit={search}>
          <label htmlFor="search_term">filter shown with </label>
          <input type="text" value={search_term} onChange={search} />
        </form>
    </div>
  )
}

export default Search