import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import TrendingList from './Home/TrendingList';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
import { fetchTrending } from './operations/operationsMovies';
import Cast from './Cast/Cast';
import Searchbar from './SearchMovies/Searchbar';

const MoviesFinder = () => {
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
      <NavLink to="searchbar">tutaj klilkaj mordo</NavLink>
      <Routes>
        <Route
          path="/react-01-goit"
          element={<TrendingList moviesList={trendingMovies} />}
        />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/details/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default MoviesFinder;
