import { NavLink } from 'react-router-dom';

const ReturnHomepage = ({ text }) => {
  return <NavLink to="/allTasks-GOIT"> &larr; {text}</NavLink>;
};

export default ReturnHomepage;
