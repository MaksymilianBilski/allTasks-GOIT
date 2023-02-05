import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';

const ContactsList = ({ list, filter, handleRemove }) => {
  const filteredList = list.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
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
  );
};

export default ContactsList;
