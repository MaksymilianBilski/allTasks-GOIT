import { Component } from 'react';
import { nanoid } from 'nanoid';
import SubmitForm from './SubmitForm/SubmitForm';
import ContactsList from './ContactsList/ContactsList';
import SearchForm from './SearchForm/SearchForm';

class Phonebook extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  componentDidMount = () => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts === null) {
      return;
    }
    this.setState(() => {
      return {
        contacts: [...localContacts],
      };
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    this.setState(() => {
      return { name, number };
    });

    if (
      this.state.contacts !== null &&
      this.state.contacts.find(
        el => el.name.includes(name) && el.number.includes(number)
      )
    ) {
      alert('this contact is already in your phonebook!');
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    localStorage.setItem(
      'contacts',
      JSON.stringify([contact, ...this.state.contacts])
    );

    const localUsers = JSON.parse(localStorage.getItem('contacts'));

    this.setState(() => {
      return { contacts: [...localUsers] };
    });

    form.reset();
  };

  handleRemove = id => {
    localStorage.setItem(
      'filteredContacts',
      JSON.stringify(this.state.contacts.filter(el => el.id !== id))
    );
    const filteredContacts = JSON.parse(
      localStorage.getItem('filteredContacts')
    );
    localStorage.setItem('contacts', JSON.stringify([...filteredContacts]));
    this.setState(() => {
      return {
        contacts: filteredContacts,
      };
    });
  };

  onSearch = evt => {
    const inputValue = evt.target.value;
    this.setState(() => {
      return { filter: inputValue };
    });
  };

  render() {
    return (
      <div>
        <SubmitForm handleSubmit={this.handleSubmit} />
        <ContactsList
          handleRemove={this.handleRemove}
          list={this.state.contacts}
          filter={this.state.filter}
        />
        <SearchForm value={this.state.filter} handleChange={this.onSearch} />
      </div>
    );
  }
}

export default Phonebook;
