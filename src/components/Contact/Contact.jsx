import PropTypes from 'prop-types';
import { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, number, id } = this.props;
    return (
      <li key={id}>
        {name} {number}
      </li>
    );
  }
}

Contact.propTypes = {};

export default Contact;
