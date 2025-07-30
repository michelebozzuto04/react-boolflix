import './index.css'
import HomePage from './pages/HomePage/HomePage'
import SearchPage from './pages/SearchPage/SearchPage'
import MoviePage from './pages/MoviePage/MoviePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrendingPage from './pages/TrendingPage/TrendingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/explore' element={<SearchPage />} />
        <Route path='/trending' element={<TrendingPage />} />
        <Route path='/details/:id' element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
