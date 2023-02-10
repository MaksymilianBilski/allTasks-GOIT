import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.navigationWrapper}>
      <NavLink className={css.navLink} to="/react-01-goit/movies/moviesList">
        Movie finder
      </NavLink>
      <NavLink className={css.navLink} to="/react-01-goit/phonebook">
        Phonebook
      </NavLink>
      <NavLink className={css.navLink} to="/react-01-goit/feedback">
        Feedback
      </NavLink>
      <NavLink className={css.navLink} to="/react-01-goit/images">
        Images finder
      </NavLink>
      <NavLink className={css.navLink} to="/react-01-goit/tasksManager">
        Task manager
      </NavLink>
    </div>
  );
};

export default Navigation;
