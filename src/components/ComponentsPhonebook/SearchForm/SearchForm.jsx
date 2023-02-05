const SearchForm = ({ handleChange, value }) => {
  return (
    <form>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="search"
      ></input>
    </form>
  );
};

export default SearchForm;
