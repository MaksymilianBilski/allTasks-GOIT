import Button from 'components/common/Button/Button';
import css from './Contact.module.css';

const Contact = ({ name, number, id, handleRemove }) => {
  return (
    <li className={css.contact}>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Number:</span> {number}
      </p>
      <div>
        <Button
          handleClick={() => {
            handleRemove(id);
          }}
          children="remove"
          classNameBtn={css.btn}
          type="submit"
        />
      </div>
    </li>
  );
};

export default Contact;
