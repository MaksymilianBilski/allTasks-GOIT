import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    const btnName = e.target.textContent;
    dispatch(setFilter(btnName));
  };

  return (
    <section className={css.btnSection}>
      <h3>Filters</h3>
      <div>
        <button onClick={handleClick} className={css.btn}>
          all
        </button>
        <button onClick={handleClick} className={css.btn}>
          active
        </button>
        <button onClick={handleClick} className={css.btn}>
          completed
        </button>
      </div>
    </section>
  );
};

export default Filters;
