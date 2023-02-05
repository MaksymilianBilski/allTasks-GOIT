import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../operations/operationsMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  console.log(movieId);

  const createReviewsData = async id => {
    try {
      const response = await fetchReviews(id);
      setReviews(response.results);
      
      return response.results;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createReviewsData(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews !== undefined &&
          reviews.map(el => (
            <li>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
