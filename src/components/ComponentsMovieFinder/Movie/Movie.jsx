import { NavLink, useLocation } from 'react-router-dom';
import css from './Movie.module.css';
import { nanoid } from 'nanoid';

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
    </li>
  );
};

export default Movie;
