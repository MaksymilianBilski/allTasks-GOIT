import { Component } from 'react';
import { nanoid } from 'nanoid';
import Button from 'componentsFeedback/Button/Button';

class LeaveFeedback extends Component {
  render() {
    const { state, handleClick } = this.props;
    const stats = Object.keys(state).splice(0, 3);
    const list = stats.map(el => (
      <Button
        handleClick={handleClick}
        type={'button'}
        name={el}
        key={nanoid()}
      />
    ));

    return <div>{list}</div>;
  }
}

export default LeaveFeedback;
