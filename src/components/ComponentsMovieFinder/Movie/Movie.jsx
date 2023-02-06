import { NavLink, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Movie = ({ data }) => {
  const location = useLocation();

  return (
    <li key={nanoid()}>
      <NavLink to={`/details/${data.id}`} state={{ from: location }}>
        {data.original_title ? data.original_title : data.name}
      </NavLink>
    </li>
  );
};

export default Movie;
