import { Form } from 'components/common/Form/Form';
import css from './SearchForm.module.css';

const SearchForm = ({ handleChange, value }) => {
  return (
    <Form
      classNameInput={css.input}
      classNameForm={css.form}
      handleChange={handleChange}
      value={value}
      type="text"
      placeholder="search"
    />
  );
};

export default SearchForm;
