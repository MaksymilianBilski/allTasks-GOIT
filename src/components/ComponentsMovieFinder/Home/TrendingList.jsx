import { useState, useEffect } from 'react';
import { fetchTrending } from '../operations/operationsMovies';
import Movie from '../Movie/Movie';

const TrendingList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const createTrendingList = async () => {
    try {
      const response = await fetchTrending();
      setTrendingMovies(response.results);
      return response.results;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createTrendingList();
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies.map(el => (
          <Movie data={el} />
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
