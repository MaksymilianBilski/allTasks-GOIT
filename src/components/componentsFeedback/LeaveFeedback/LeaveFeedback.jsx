import { nanoid } from 'nanoid';
import Button from 'components/common/Button/Button';
import css from './LeaveFeedback.module.css';

const LeaveFeedback = ({ state, handleClick }) => {
  const stats = Object.keys(state);
  const list = stats.map(el => (
    <Button
      className={css.btn}
      handleClick={handleClick}
      type={'button'}
      name={el.toUpperCase()}
      key={nanoid()}
    />
  ));

  return <div className={css.btnWrappers}>{list}</div>;
};

export default LeaveFeedback;
