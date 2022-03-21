import testimage from "../assets/hero-bg.svg";

const Movie = ({ movie }) => {
      return (
            <section className="movie">
                  <img src={testimage} alt="movie-poster" className="movie-poster" />
                  <p className="movie-name">Movie Nmae</p>   </section>

      )
}

export default Movie