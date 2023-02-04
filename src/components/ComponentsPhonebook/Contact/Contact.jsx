import { Component } from 'react';

class Contact extends Component {
  render() {
    const { name, number, id, handleRemove } = this.props;
    return (
      <li>
        Name: {name}, Number: {number}
        <button onClick={() => handleRemove(id)}>remove</button>
      </li>
    );
  }
}

export default Contact;
