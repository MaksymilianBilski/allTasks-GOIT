import { nanoid } from 'nanoid';
import { Component } from 'react';

class StatisticList extends Component {
  render() {
    const { state } = this.props;
    const stats = Object.entries(state);
    const list = stats.map(el => (
      <li key={nanoid()}>
        {el[0]}: {el[1]}
      </li>
    ));

    return <ul>{list}</ul>;
  }
}

export default StatisticList;
