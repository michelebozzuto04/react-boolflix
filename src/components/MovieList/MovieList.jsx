import './MovieList.css'
import CardComponent from '../CardComponent/CardComponent';

function MovieList({ movies, series }) {

    return (
        <>
            <h2>Movies</h2>
            <ul className='cardList'>
                {movies.map((movieItem) => (
                    <CardComponent key={movieItem.id} movieItem={movieItem} />
                ))}
            </ul>

            <h2>TV Series</h2>
            <ul className='cardList'>
                {series.map((seriesItem) => (
                    <CardComponent key={seriesItem.id} movieItem={seriesItem} />
                ))}
            </ul>
        </>
    )
}

export default MovieList