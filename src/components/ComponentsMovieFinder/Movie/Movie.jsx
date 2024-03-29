import { NavLink, useLocation } from 'react-router-dom';
import css from './Movie.module.css';

const photoURL = 'https://image.tmdb.org/t/p/w500/';
const substPhotoURL =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

const Movie = ({ data }) => {
  const location = useLocation();

  return (
    <li className={css.movieItem} key={data.key}>
      <NavLink
        className={css.navLink}
        to={`/allTasks-GOIT/details/${data.id}`}
        state={{ from: location }}
      >
        {data.title ? data.title : data.name}
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
