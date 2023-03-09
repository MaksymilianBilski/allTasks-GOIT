import { Form } from 'components/common/Form/Form';
import css from './searchbar.module.css';

const Searchbar = ({ handleSubmit, value }) => {
  return (
    <Form
      classNameInput={css.input}
      classNameForm={css.form}
      handleFormSubmit={handleSubmit}
      name="search"
      value={value}
      placeholder="search images..."
      type="text"
    />
  );
};

export default Searchbar;
