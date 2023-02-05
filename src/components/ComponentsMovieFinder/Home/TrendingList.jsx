import { useState, useEffect } from 'react';
import { fetchTrending } from '../operations/operationsMovies';
import Movie from '../Movie/Movie';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const createTrendingList = async () => {
    try {
      const response = await fetchTrending();
      setTrendingMovies(response.results);
      console.log('test')
      return response.results;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createTrendingList();
  }, []);

  return (
    <ul>
      {trendingMovies.map(el => (
        <Movie data={el} />
      ))}
    </ul>
  );
};

export default TrendingList;
