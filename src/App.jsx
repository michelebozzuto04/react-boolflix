import { useState } from 'react'
import './index.css'
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const api_key = import.meta.env.VITE_API_KEY;

  function handleSearch(e) {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchInput}`)
      .then(res => res.json())
      .then(data => setResults(data.results))
  }

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
      <MovieList results={results} />
    </>
  )
}

export default App
