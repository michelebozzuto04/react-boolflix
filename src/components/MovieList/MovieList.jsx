import './MovieList.css'

function MovieList({ movies, series }) {
    return (
        <>
            <h2>Movies</h2>
            <ul className='cardList'>
                {movies.map((movieItem) => (
                    <li>
                        <div className='card'>
                            <p>{movieItem.title}</p>
                            <p>{movieItem.original_title}</p>
                            <p>{movieItem.original_language}</p>
                            <p>{movieItem.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>TV Series</h2>
            <ul className='cardList'>
                {series.map((seriesItem) => (
                    <li>
                        <div className='card'>
                            <p>{seriesItem.name}</p>
                            <p>{seriesItem.original_name}</p>
                            <p>{seriesItem.original_language}</p>
                            <p>{seriesItem.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MovieList