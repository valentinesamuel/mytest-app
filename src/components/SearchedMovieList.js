import React from 'react'

const SearchedMovieList = ({ queriedMovies }) => {
  return (
    <section className='searched-movie'>{
      queriedMovies.map(qmovie => {
        const imgSrc = `https://image.tmdb.org/t/p/original//${qmovie.backdrop_path}`
        return <div className='list-item' key={qmovie.id}>
          <img src={imgSrc} alt="movie-cover" className='image' />
          {qmovie.title}</div>
      })

    }</section>
  )
}

export default SearchedMovieList