import { nanoid } from 'nanoid';
import css from './StatisticsList.module.css';

const StatisticList = ({ state }) => {
  const stats = Object.entries(state);
  const list = stats.map(el => (
    <li className={css.listItem} key={nanoid()}>
      {el[0] === 'positive'
        ? `${el[0]}: ${el[1] !== undefined ? el[1].toFixed(4) : 0}`
        : `${el[0]}: ${el[1] !== undefined ? el[1] : 0}`}
    </li>
  ));

  return <ul className={css.list}>{list}</ul>;
};

export default StatisticList;
