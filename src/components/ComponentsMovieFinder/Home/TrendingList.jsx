import { useState, useEffect } from 'react';
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
    <div className={css.listWrapper}>
      <ul className={css.trendingList}>
        {trendingMovies.map(el => (
          <Movie data={el} />
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
