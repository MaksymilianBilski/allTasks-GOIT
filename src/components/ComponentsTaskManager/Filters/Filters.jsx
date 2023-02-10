import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import Button from 'components/common/Button/Button';

const Filters = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    const btnName = e.target.textContent;
    dispatch(setFilter(btnName));
  };

  return (
    <section>
      <h3>Filters</h3>
      <Button handleClick={handleClick} children="all" />
      <Button handleClick={handleClick} children="active" />
      <Button handleClick={handleClick} children="completed" />
    </section>
  );
};

export default Filters;
