import { Component } from 'react';
import PropTypes from 'prop-types';

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
