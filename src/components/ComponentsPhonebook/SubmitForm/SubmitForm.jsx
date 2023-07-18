import css from './SubmitForm.module.css';

const SubmitForm = ({ handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputWrapper}>
        <label className={css.nameLabel}>
          Name
          <input
            className={css.nameInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.numberLabel}>
          Number
          <input
            className={css.numberInput}
            type="tel"
            name="number"
            pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.btn} type="submit">
        Confirm
      </button>
    </form>
  );
};

export default SubmitForm;
