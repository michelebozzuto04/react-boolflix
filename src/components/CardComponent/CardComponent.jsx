import './CardComponent.css'
import FlagComponent from '../FlagComponent/FlagComponent'
import { IoStar } from 'react-icons/io5';

function CardComponent({ movieItem }) {

    function renderRating(movieVote) {
        const rating = Math.round((movieVote * 5) / 10);

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
                <p>{movieItem.title || movieItem.name}</p>
                <p>{movieItem.original_title || movieItem.original_name}</p>
                <FlagComponent movieLanguage={movieItem.original_language} svg />
                <p>
                    {
                        renderRating(movieItem.vote_average)
                    }
                </p>
            </div>
        </li>
    )
}

export default CardComponent