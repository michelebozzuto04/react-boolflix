import ReactCountryFlag from 'react-country-flag'
import './MovieList.css'
import languageCodes from '../../utils/languageCodes'
import FlagComponent from '../FlagComponent/FlagComponent'

function MovieList({ movies, series }) {
    return (
        <>
            <h2>Movies</h2>
            <ul className='cardList'>
                {movies.map((movieItem) => (
                    <li key={movieItem.id}>
                        <div className='card'>
                            <img src={`https://image.tmdb.org/t/p/w342${movieItem.poster_path}`} />
                            <p>{movieItem.title}</p>
                            <p>{movieItem.original_title}</p>
                            <FlagComponent movieLanguage={movieItem.original_language} svg />
                            <p>{movieItem.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>TV Series</h2>
            <ul className='cardList'>
                {series.map((seriesItem) => (
                    <li key={seriesItem.id}>
                        <div className='card'>
                            <img src={`https://image.tmdb.org/t/p/w342${seriesItem.poster_path}`} />
                            <p>{seriesItem.name}</p>
                            <p>{seriesItem.original_name}</p>
                            <FlagComponent movieLanguage={seriesItem.original_language} />
                            <p>{seriesItem.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MovieList