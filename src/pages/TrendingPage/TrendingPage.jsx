import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Header from '../../components/Header/Header';

function TrendingPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovies(data?.results))
    }, [])

    return (
        <>
            <Header />
            <MovieList movies={movies} listTitle={"TRENDING"} />
        </>
    )
}

export default TrendingPage