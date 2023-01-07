import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(el => (
          <li
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={el.id}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export { Statistics };
