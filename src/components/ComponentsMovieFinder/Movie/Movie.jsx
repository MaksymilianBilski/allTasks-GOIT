import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Movie = ({ data }) => {
  return (
    <li key={nanoid()}>
      <NavLink to={`/details/${data.id}`}>
        {data.original_title ? data.original_title : data.name}
      </NavLink>
    </li>
  );
};

export default Movie;
