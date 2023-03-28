import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import SubmitForm from '../ComponentsPhonebook/SubmitForm/SubmitForm';
import ContactsList from '../ComponentsPhonebook/ContactsList/ContactsList';
import SearchForm from '../ComponentsPhonebook/SearchForm/SearchForm';
import {
  addContact,
  deleteContact,
  addFilter,
} from 'components/ComponentsPhonebook/redux/phonebookSlice';
import {
  getContacts,
  getFilter,
} from 'components/ComponentsPhonebook/redux/phonebookSelectors';
import { NavLink } from 'react-router-dom';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;
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
    dispatch(addContact(contact));

    form.reset();
  };

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  const onSearch = evt => {
    const inputValue = evt.target.value;
    dispatch(addFilter(inputValue));
  };

  return (
    <div>
      <NavLink to="/allTasks-GOIT">HOMEPAGE</NavLink>
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
