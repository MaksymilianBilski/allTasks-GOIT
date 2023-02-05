import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import SubmitForm from './SubmitForm/SubmitForm';
import ContactsList from './ContactsList/ContactsList';
import SearchForm from './SearchForm/SearchForm';

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts === null) {
      return;
    }
    setContacts(localContacts);
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    // setName(name);
    // setNumber(number);

    if (
      contacts !== null &&
      contacts.find(el => el.name.includes(name) && el.number.includes(number))
    ) {
      alert('this contact is already in your phonebook!');
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    localStorage.setItem('contacts', JSON.stringify([contact, ...contacts]));

    const localUsers = JSON.parse(localStorage.getItem('contacts'));

    setContacts(localUsers);

    form.reset();
  };

  const handleRemove = id => {
    localStorage.setItem(
      'filteredContacts',
      JSON.stringify(contacts.filter(el => el.id !== id))
    );

    const filteredContacts = JSON.parse(
      localStorage.getItem('filteredContacts')
    );

    localStorage.setItem('contacts', JSON.stringify([...filteredContacts]));
    setContacts(filteredContacts);
  };

  const onSearch = evt => {
    const inputValue = evt.target.value;
    setFilter(inputValue);
  };

  return (
    <div>
      <SubmitForm handleSubmit={handleSubmit} />
      <ContactsList
        handleRemove={handleRemove}
        list={contacts}
        filter={filter}
      />
      <SearchForm value={filter} handleChange={onSearch} />
    </div>
  );
};

export default Phonebook;
