import React from 'react'
import '../styles/Suggestion.css'

function Suggestion({searchMovies}) {
  return (
    <div>
      {searchMovies.map((searchMovie) => {
        return (
            <div className = 'searchMovie'>
            {searchMovie.title}         
            </div>
        )
      })}
    </div>
  )
}

export default Suggestion
