import { useEffect, useState } from 'react';
import Button from 'components/componentsFeedback/Button/Button';
import { fetchDetails } from '../operations/operationsMovies';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const photoURL = 'https://image.tmdb.org/t/p/w500/';
const substPhotoURL =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const MovieDetails = () => {
  const [detailsData, setDetailsData] = useState([]);
  const [photo, setPhoto] = useState('');
  const location = useLocation();

  const createMovieDetails = async id => {
    try {
      const response = await fetchDetails(id);
      setDetailsData(response);
      setPhoto(`${photoURL + response.backdrop_path}`);
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
      <div className={css.detailsContainer}>
        <div
          className={css.backImage}
          style={{
            backgroundImage: `url('${photoURL + detailsData.backdrop_path}'),
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
          <Button className={css.goBackBtn} type="button" name="go back" />
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
              {detailsData.title ? detailsData.title : detailsData.name}(
              {detailsData.release_date ?? 'Date unknown'})
            </h2>
            <span>
              Rates:{' '}
              {detailsData.vote_average
                ? detailsData.vote_average.toFixed(2)
                : 0}
              &#9733;
            </span>
            <h2> Overview</h2>
            <p>{detailsData.overview}</p>
            <h2>Genres</h2>
            <p>
              {detailsData.genres !== undefined &&
                detailsData.genres.map(el => el.name + ' ')}
            </p>
          </div>
        </div>
        <div className={css.additionalInfo}>
          <span>MORE INFO</span>
          <NavLink
            state={{ from: location }}
            to={`/allTasks-GOIT/details/${movieId}/reviews`}
          >
            reviews
          </NavLink>

          <NavLink
            state={{ from: location }}
            to={`/allTasks-GOIT/details/${movieId}/credits`}
          >
            credits
          </NavLink>
        </div>
        <Outlet context={photo} />
      </div>
    )
  );
};

export default MovieDetails;
