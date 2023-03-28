import Button from 'components/common/Button/Button';
import css from './Contact.module.css';

const Contact = ({ name, number, id, handleRemove }) => {
  document.body.style.backgroundColor = 'rgb(158, 228, 176)';

  return (
    <li className={css.contact}>
      <div className={css.credentials}>
        <p>
          Name:<span>{name}</span>
        </p>
        <p>
          Number:<span>{number}</span>
        </p>
      </div>
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
