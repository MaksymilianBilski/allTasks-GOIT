import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrending } from '../operations/operationsMovies';
import Movie from '../Movie/Movie';
import css from './TrendingList.module.css';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const createTrendingList = async () => {
    try {
      const response = await fetchTrending();
      setTrendingMovies(response.results);
      console.log(response.results);
      return response.results;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createTrendingList();
  }, []);

  return (
    <div className={css.trendingContainer}>
      <NavLink to="moviesList/searchbar" className={css.searchMoviesBtn}>
        <button>Search Movies</button>
      </NavLink>
      <div className={css.listWrapper}>
        <ul className={css.trendingList}>
          {trendingMovies.map(el => (
            <Movie data={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingList;
