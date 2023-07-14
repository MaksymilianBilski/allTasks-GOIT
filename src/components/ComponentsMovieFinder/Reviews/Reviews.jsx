import { useState, useEffect, useRef } from 'react';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { fetchReviews } from '../operations/operationsMovies';
import css from './Reviews.module.css';

const GetPhoto = () => {
  const reviewsContext = <Outlet context={useOutletContext()} />;
  return reviewsContext.props.context;
};
const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  //for get <outlet> height(because its not known before some action)
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight === null ? 0 : ref.current.clientHeight);
  });

  const createReviewsData = async id => {
    try {
      const response = await fetchReviews(id);
      setReviews(response.results.length !== 0 ? response.results : undefined);
      return response.results.length !== 0 ? response.results : undefined;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createReviewsData(movieId);
  }, [movieId]);

  return (
    <div>
      <div
        className={css.backImage}
        style={{
          backgroundImage: `url(${GetPhoto()})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: `${height}px`,
        }}
      ></div>
      <ul className={css.reviewList} ref={ref}>
        {reviews !== undefined ? (
          reviews.map(el => (
            <li className={css.review}>
              <h3>
                Author:
                {' ' + el.author}
              </h3>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <div className={css.noReviews}>
            There are no reviews at the moment
          </div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
