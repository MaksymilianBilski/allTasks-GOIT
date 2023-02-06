import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/react-01-goit/movies/moviesList">Movie finder </NavLink>
      <NavLink to="/react-01-goit/phonebook">Phonebook </NavLink>
      <NavLink to="/react-01-goit/feedback">Feedback </NavLink>
      <NavLink to="/react-01-goit/images">Images finder </NavLink>
    </div>
  );
};

export default Navigation;
