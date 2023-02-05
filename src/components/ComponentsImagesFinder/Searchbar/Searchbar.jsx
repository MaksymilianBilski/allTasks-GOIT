const Searchbar = ({ handleSubmit, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={value}
        placeholder="search images"
        type="text"
      ></input>
    </form>
  );
};

export default Searchbar;
