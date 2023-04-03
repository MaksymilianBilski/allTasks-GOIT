import { NavLink, useLocation } from 'react-router-dom';
import css from './Movie.module.css';
import { nanoid } from 'nanoid';
const photoURL = 'https://image.tmdb.org/t/p/w500/';
const substPhotoURL =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const Movie = ({ data }) => {
  const location = useLocation();

  return (
    <li className={css.movieItem} key={nanoid()}>
      <NavLink
        className={css.navLink}
        to={`/details/${data.id}`}
        state={{ from: location }}
      >
        {data.original_title ? data.original_title : data.name}
      </NavLink>
      <img
        className={css.moviePoster}
        alt="movie poster"
        src={
          data.backdrop_path === null
            ? substPhotoURL
            : `${photoURL + data.backdrop_path}`
        }
      ></img>
    </li>
  );
};

export default Movie;
