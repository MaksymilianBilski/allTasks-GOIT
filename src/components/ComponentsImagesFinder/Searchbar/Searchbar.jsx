import { Form } from 'components/common/Form/Form';

const Searchbar = ({ handleSubmit, value }) => {
  return (
    <Form
      handleFormSubmit={handleSubmit}
      name="search"
      value={value}
      placeholder="search images..."
      type="text"
    />
  );
};

export default Searchbar;
