import { useEffect, useState } from 'react';
import Button from 'componentsFeedback/Button/Button';
import { fetchDetails } from '../operations/operationsMovies';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const photoURL = 'https://image.tmdb.org/t/p/w500/';
const substPhotoURL =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const MovieDetails = () => {
  const [detailsData, setDetailsData] = useState([]);
  const location = useLocation();

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
        <div
          className={css.backImage}
          style={{
            background: `url('${photoURL + detailsData.backdrop_path}'),
            url('${substPhotoURL}')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <NavLink
          to={
            location.state !== null
              ? location.state.from
              : '/allTasks-GOIT/movies/moviesList'
          }
        >
          <Button type="button" name="go back" />
        </NavLink>
        <div className={css.descriptionWrapper}>
          <figure className={css.imageWrapper}>
            <img
              alt={detailsData.tags}
              src={
                detailsData.backdrop_path !== null
                  ? photoURL + detailsData.backdrop_path
                  : substPhotoURL
              }
            />
          </figure>
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
        <NavLink state={{ from: location }} to={`/details/${movieId}/reviews`}>
          reviews
        </NavLink>
        <NavLink state={{ from: location }} to={`/details/${movieId}/credits`}>
          credits
        </NavLink>

        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
