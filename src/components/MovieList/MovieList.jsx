import './MovieList.css'
import '../../index.css'
import CardComponent from '../CardComponent/CardComponent';

function MovieList({ movies, listTitle }) {

    return (
        <div className='container'>
            {
                movies != null ?
                    <>
                        {movies.length !== 0 && listTitle && (<h2 className='listTitle'>{listTitle}</h2>)}
                        <ul className='cardList'>
                            {movies?.map((movieItem) => (
                                <CardComponent key={movieItem.id} movieItem={movieItem} />
                            ))}
                        </ul>
                    </> : null
            }
        </div>
    )
}

export default MovieList