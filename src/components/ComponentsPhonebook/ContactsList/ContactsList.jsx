import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';
import css from './ContactsList.module.css';

const ContactsList = ({ list, filter, handleRemove }) => {
  const filteredList = list.filter(el => {
    if (Number(filter)) {
      return el.number.includes(filter);
    }
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      <h2 className={css.phonebookHeader}>Your Contacts</h2>
      <ul className={css.contactsList}>
        {filteredList.map(el => (
          <Contact
            handleRemove={handleRemove}
            key={nanoid()}
            name={el.name}
            number={el.number}
            id={el.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
