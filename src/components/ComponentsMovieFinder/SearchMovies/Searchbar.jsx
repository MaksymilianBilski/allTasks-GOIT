import { useState } from 'react';
import Movie from '../Movie/Movie';
import { fetchByQuery } from '../operations/operationsMovies';

const Searchbar = () => {
  const [queryData, setQueryData] = useState();
  const searchMovies = async query => {
    try {
      const response = await fetchByQuery(query);
      setQueryData(response.results);
      return response;
    } catch (e) {
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.search.value;
    searchMovies(inputValue);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        hehe
        <input type="text" name="search"></input>
      </form>
      <ul>{queryData && queryData.map(el => <Movie data={el} />)}</ul>
    </div>
  );
};

export default Searchbar;
