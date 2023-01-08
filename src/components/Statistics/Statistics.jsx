import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../Statistics/Statistics.module.css';
import { nanoid } from 'nanoid';

class Statistics extends Component {
  render() {
    const { stats, state, total, positive } = this.props;
    return (
      <div className={css.Statistics}>
        {stats.map(stat => (
          <div key={nanoid()}>
            {stat === 'Total' ? stat + ': ' + total : ''}
            {stat === 'Positive' ? stat + (isNaN(positive) ? 0 : positive) : ''}
            {state[stat.toLowerCase()] !== undefined &&
              stat + ': ' + state[stat.toLowerCase()]}
          </div>
        ))}
      </div>
    );
  }
}

Statistics.propTypes = {
  stats: PropTypes.array,
  state: PropTypes.object,
};

export { Statistics };
