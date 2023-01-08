import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../Statistics/Statistics.module.css';
import { nanoid } from 'nanoid';

class Statistics extends Component {
  render() {
    const { stats, state, id } = this.props;
    return (
      <div className={css.Statistics}>
        {stats.map(stat => (
          <div key={nanoid()}>
            {state[stat] === undefined ? stat + ': 0' : stat + state[stat]}
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
