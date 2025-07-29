import './CardComponent.css'
import FlagComponent from '../FlagComponent/FlagComponent'
import { IoStar } from 'react-icons/io5';

function CardComponent({ movieItem }) {

    function renderRating(movieVote) {
        const rating = Math.ceil((movieVote * 5) / 10);

        var stars = [];
        for (var i = 0; i < rating; i++) {
            stars.push(<IoStar color='#ffc400' />);
        }
        return stars;
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
                    <FlagComponent movieLanguage={movieItem.original_language} svg />
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