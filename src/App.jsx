import { useState } from 'react'
import './index.css'

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
      <header>
        <form onSubmit={(e) => handleSearch(e)}>
          <input
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>

        <ul>
          {results.map((result) => (
            <li>{result.title}</li>
          ))}
        </ul>
      </header>
    </>
  )
}

export default App
