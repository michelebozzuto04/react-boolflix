import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom';
import FlagComponent from '../../components/FlagComponent/FlagComponent';
import { IoPlay, IoStar, IoStarOutline } from 'react-icons/io5';
import './MoviePage.css'

function MoviePage() {

    const [movie, setMovie] = useState(null);

    const [movieGenres, setMovieGenres] = useState([])

    const [movieCast, setMovieCast] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieGenres(data.genres))
            .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error));


        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(data => setMovieCast(data.cast))
            .catch(error => console.error(error));
    }, [id])

    function renderRating(movieVote) {
        const rating = Math.ceil((movieVote * 5) / 10);

        var stars = [];
        if (rating > 0) {
            for (var i = 0; i < 5; i++) {
                i < rating ? stars.push(<IoStar size={25} color='#ffc400' />) : stars.push(<IoStarOutline size={25} color='rgba(255, 255, 255, 0.6)' />)
            }
        } else {
            for (var i = 0; i < 5; i++) {
                stars.push(<IoStarOutline size={25} key={i} color='rgba(255, 255, 255, 0.6)' />)
            }
        }
        return stars;
    }

    function fetchGenre(movieItemGenres) {
        if (!Array.isArray(movieItemGenres) || !Array.isArray(movieGenres)) return "";

        const genreNames = movieItemGenres
            .map(genreId => {
                const found = movieGenres.find(g => g.id === genreId);
                return found ? found.name : null;
            })
            .filter(Boolean); // remove nulls

        return genreNames.join(", ");
    }

    function fetchActors(movieCast) {
        const castArr = [];
        for (let i = 0; i < 5; i++) {
            castArr.push(movieCast[i]?.name);
        }

        return castArr.join(", ");
    }

    return (
        <>
            <Header />
            <div className='singleMovieCard'>

                <div className="bgContainer">
                    <img src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`} />
                    <div className="overlay" />
                </div>

                <div className="singleMovieCardDetails">
                    <div className="rating">
                        {
                            renderRating(movie?.vote_average)
                        }
                    </div>
                    <div className="language">
                        <FlagComponent size={25} movieLanguage={movie?.original_language} svg />
                    </div>
                    <p className='title'>{movie?.title || movie?.name}</p>
                    <button className='btn'>
                        <IoPlay color='white' />
                        <span> Play</span>
                    </button>
                    {
                        movie?.title !== movie?.original_title || movie?.name !== movie?.original_name ?
                            <p className='originalTitle'><span>Otiginal title:</span> {movie?.original_title || movie?.original_name}</p>
                            : null
                    }
                    <p className='genre'>{fetchGenre(movie?.genre_ids)}</p>
                    <p className='overview'>{movie?.overview}</p>
                    <p className='cast'><span>Cast: </span>{fetchActors(movieCast)}</p>
                </div>
            </div>
        </>
    )
}

export default MoviePage