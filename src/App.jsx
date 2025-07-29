import { useState } from 'react'
import './index.css'
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const api_key = import.meta.env.VITE_API_KEY;

  function handleSearch(e) {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchInput}`)
      .then(res => res.json())
      .then(data => setSeries(data.results))

  }

  console.log(movies, series)

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <MovieList movies={movies} series={series} />
    </>
  )
}

export default App
