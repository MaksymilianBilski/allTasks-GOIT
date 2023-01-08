import { Component } from 'react';

class Button extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <button type="submit">{name}</button>
      </div>
    );
  }
}

export { Button };
