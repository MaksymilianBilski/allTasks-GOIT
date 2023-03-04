import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.navigationWrapper}>
      <NavLink className={css.navLink} to="/allTasks-GOIT/quiz">
        Quiz
      </NavLink>
      <NavLink className={css.navLink} to="/allTasks-GOIT/movies/moviesList">
        Movie finder
      </NavLink>
      <NavLink className={css.navLink} to="/allTasks-GOIT/phonebook">
        Phonebook
      </NavLink>
      <NavLink className={css.navLink} to="/allTasks-GOIT/feedback">
        Feedback
      </NavLink>
      <NavLink className={css.navLink} to="/allTasks-GOIT/images">
        Images finder
      </NavLink>
      <NavLink className={css.navLink} to="/allTasks-GOIT/tasksManager">
        Task manager
      </NavLink>
    </div>
  );
};

export default Navigation;
