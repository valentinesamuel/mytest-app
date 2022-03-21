
const Movie = ({ movie }) => {
      return (
            <section className="movie">
                  <img src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`} alt="movie-poster" className="movie-poster" />
                  <p className="movie-name">{movie.title}</p>   </section>

      )
}

export default Movie