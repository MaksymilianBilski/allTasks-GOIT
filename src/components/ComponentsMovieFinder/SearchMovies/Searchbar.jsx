import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Movie from '../Movie/Movie';
import { fetchByQuery } from '../operations/operationsMovies';
import { Form } from 'components/common/Form/Form';
import css from './Searchbar.module.css';

const Searchbar = () => {
  const [queryData, setQueryData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

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
    setSearchParams({ query: inputValue });
    form.reset();
  };

  return (
    <div className={css.searchWrapper}>
      <Form
        handleFormSubmit={handleSubmit}
        type="text"
        name="search"
        placeholder="search for movies"
      />
      <div className={css.listWrapper}>
        <ul className={css.searchList}>
          {queryData && queryData.map(el => <Movie data={el} />)}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
