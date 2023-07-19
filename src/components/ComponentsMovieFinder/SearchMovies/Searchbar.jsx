import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Movie from '../Movie/Movie';
import { fetchByQuery } from '../operations/operationsMovies';
import { Form } from 'components/common/Form/Form';
import css from './Searchbar.module.css';
import ReturnHomepage from 'components/Navigation/ReturnHomepage';

const Searchbar = () => {
  const [queryData, setQueryData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('query') === null) {
      return;
    }
    searchMovies(searchParams.get('query'));
  }, [searchParams]);

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
    let params = { query: inputValue };
    setSearchParams(params);
    form.reset();
  };

  return (
    <div className={css.searchContainer}>
      <div className={css.searchHeader}>
        <ReturnHomepage text={'back homepage'} />
        <Form
          handleFormSubmit={handleSubmit}
          type="text"
          name="search"
          placeholder="search for movies"
          classNameInput={css.searchInput}
        />
      </div>
      <div className={css.listWrapper}>
        <ul className={css.searchList}>
          {queryData && queryData.map(el => <Movie data={el} />)}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
