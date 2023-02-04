import { Component } from 'react';

class Button extends Component {
  render() {
    const { name, type, handleClick } = this.props;
    return (
      <button onClick={handleClick} type={type}>
        {name}
      </button>
    );
  }
}

export default Button;
