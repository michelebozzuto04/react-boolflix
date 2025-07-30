import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Header from '../../components/Header/Header';

function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setMovies(data?.results))
    }, [])

    return (
        <>
            <Header />
            <MovieList movies={movies} listTitle={"LATEST MOVIES"} />
        </>
    )
}

export default HomePage