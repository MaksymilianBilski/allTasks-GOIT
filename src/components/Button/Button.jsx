import { Component } from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  name: PropTypes.string,
};

export { Button };
