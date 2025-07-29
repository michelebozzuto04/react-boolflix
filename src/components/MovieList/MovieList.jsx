import React from 'react'

function MovieList({ results }) {
    return (
        <ul className='cardList'>
            {results.map((result) => (
                <li>
                    <div className='card'>
                        <p>{result.title}</p>
                        <p>{result.original_title}</p>
                        <p>{result.original_language}</p>
                        <p>{result.vote_average}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default MovieList