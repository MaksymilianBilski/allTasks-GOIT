import { NavLink } from 'react-router-dom';

const ReturnHomepage = ({ text }) => {
  return (
    <NavLink
      style={{
        color: 'black',
        textDecoration: ' none',
        width: '70px',
        fontSize: '14px',
      }}
      to="/allTasks-GOIT"
    >
      {' '}
      &larr; {text}
    </NavLink>
  );
};

export default ReturnHomepage;
