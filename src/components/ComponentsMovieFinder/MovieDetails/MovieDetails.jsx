import { useEffect, useState } from 'react';
import { fetchDetails } from '../operations/operationsMovies';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const photoURL = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [detailsData, setDetailsData] = useState([]);

  const createMovieDetails = async id => {
    try {
      const response = await fetchDetails(id);
      setDetailsData(response);
      return response;
    } catch (e) {
      return;
    }
  };
  const { movieId } = useParams();

  useEffect(() => {
    createMovieDetails(movieId);
  }, [movieId]);

  return (
    detailsData !== undefined && (
      <div>
        <div className={css.descritpionWrapper}>
          <div className={css.imageWrapper}>
            <img
              alt={detailsData.tags}
              src={photoURL + detailsData.backdrop_path}
            />
          </div>
          <div className={css.description}>
            <h2>
              {detailsData.original_title
                ? detailsData.original_title
                : detailsData.name}
              ({detailsData.release_date})
            </h2>
            <span>User Score: {detailsData.vote_average}%</span>
            <h3> Overview</h3>
            <span>{detailsData.overview}</span>
            <h4>Genres</h4>
            <span>
              {detailsData.genres !== undefined &&
                detailsData.genres.map(el => el.name)}
            </span>
          </div>
        </div>
        <span>Additional Information</span>
        <NavLink to={`/details/${movieId}/reviews`}>reviews</NavLink>
        <NavLink to={`/details/${movieId}/credits`}>credits</NavLink>
        
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
