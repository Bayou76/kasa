import { FaStar } from 'react-icons/fa';
import './rating.scss';

function Rating({ rating }) {
    const ratingValue = parseInt(rating);
    return (
        <div className='rating_content'>
            {[...Array(5)].map((_star, index) => {
                const starColorClass = index < ratingValue ? 'star fullStar' : 'star emptyStar';
                return (
                    <FaStar
                        key={index}
                        className={starColorClass}
                    />
                );
            })}
        </div>
    );
}



export default Rating