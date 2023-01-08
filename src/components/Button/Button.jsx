import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <div>
        <button onClick={onClick} type="submit">
          {name}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button };
