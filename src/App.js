import { useEffect, useState } from 'react';

import './App.scss';
import SearchedMovieList from './components/SearchedMovieList';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/Category';

function App() {

  const [movieCategory, setMovieCategory] = useState([])

  const [SearchedMovie, setSearchedMovie] = useState([])
  const [searchWord, setSearchWord] = useState([])

  useEffect(() => {
    const fetchMovies = () => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY
        }&language=en-US&page=1`).then((response) => {
          return response.json();
        }).then((data) => {
          return setMovieCategory(data.results);
        })
    }
    fetchMovies()
  }, [])

  const searchMovies = (movieTitle) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY
      }&language=en-US&query=${movieTitle}&page=1&include_adult=false`).then((response) => {
        return response.json();
      }).then((data) => {
        return setSearchedMovie(data.results);
      })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate', searchWord)
      searchMovies(searchWord);
    }
  }

  useEffect(() => {
  }, [searchWord])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="search-bar">
        <p className="bar-title">Search</p>
        <input className='search-bar' type="text" onChange={e => setSearchWord(e.target.value)} onKeyDown={handleKeyDown} />
      </div>
      {SearchedMovie && <SearchedMovieList queriedMovies={SearchedMovie} />}
      {movieCategory && <Category movieCategory={movieCategory} />}
      {movieCategory && <Category movieCategory={movieCategory.slice(8)} />}
    </div>
  );
}

export default App;
