import PropTypes from 'prop-types';
import { Component } from 'react';
import Contact from 'components/Contact/Contact';

class ContactsList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return (
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          );
        })}
      </ul>
    );
  }
}

ContactsList.propTypes = {};

export default ContactsList;
