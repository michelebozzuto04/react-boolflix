import './CardComponent.css'
import FlagComponent from '../FlagComponent/FlagComponent'
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

function CardComponent({ movieItem }) {

    const [movieGenres, setMovieGenres] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieGenres(data))
    }, [])

    console.log(movieGenres)

    function renderRating(movieVote) {
        const rating = Math.ceil((movieVote * 5) / 10);

        var stars = [];
        if (rating > 0) {
            for (var i = 0; i < 5; i++) {
                i < rating ? stars.push(<IoStar color='#ffc400' />) : stars.push(<IoStarOutline color='rgba(255, 255, 255, 0.6)' />)
            }
        } else {
            for (var i = 0; i < 5; i++) {
                stars.push(<IoStarOutline color='rgba(255, 255, 255, 0.6)' />)
            }
        }
        return stars;
    }

    function fetchGenre(movieItemGenres) {
        const genreNames = [];

        for (let i = 0; i < movieGenres.length; i++) {
            const currentGenre = movieGenres?.genres.find(genre => genre.id === movieItemGenres[i])
            genreNames.push(currentGenre?.name);
        }

        console.log(genreNames)

        return genreNames
    }

    return (
        <li key={movieItem.id}>
            <div className='card'>
                <img src={`https://image.tmdb.org/t/p/w342${movieItem.poster_path}`} />

                <div className="cardDetails">
                    <p className='title'><span>Title:</span> {movieItem.title || movieItem.name}</p>
                    {
                        movieItem.title !== movieItem.original_title || movieItem.name !== movieItem.original_name ?
                            <p className='originalTitle'><span>Otiginal title:</span> {movieItem.original_title || movieItem.original_name}</p>
                            : null
                    }
                    <p><span>Genre:</span> {fetchGenre(movieItem.genre_ids)}</p>
                    <div className="language">
                        <span>Language: </span>
                        <FlagComponent movieLanguage={movieItem.original_language} svg />
                    </div>
                    <div className="rating">
                        <span>Rating: </span>
                        {
                            renderRating(movieItem.vote_average)
                        }
                    </div>
                    <p className='overview'><span>Overview:</span> {movieItem.overview}</p>
                </div>
            </div>
        </li>
    )
}

export default CardComponent