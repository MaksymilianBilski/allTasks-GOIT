// import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import TrendingList from '../ComponentsMovieFinder/Home/TrendingList';
import MovieDetails from '../ComponentsMovieFinder/MovieDetails/MovieDetails';
import Reviews from '../ComponentsMovieFinder/Reviews/Reviews';
// import { fetchTrending } from '../ComponentsMovieFinder/operations/operationsMovies';
import Cast from '../ComponentsMovieFinder/Cast/Cast';
import Searchbar from '../ComponentsMovieFinder/SearchMovies/Searchbar';

const MoviesFinder = () => {
  // const [trendingMovies, setTrendingMovies] = useState([]);

  // const createTrendingList = async () => {
  //   try {
  //     const response = await fetchTrending();
  //     setTrendingMovies(response.results);
  //     return response.results;
  //   } catch (e) {
  //     return;
  //   }
  // };

  // useEffect(() => {
  //   createTrendingList();
  // }, []);

  return (
    <div>
      <NavLink to="/react-01-goit/movies/moviesList">HOMEPAGE</NavLink>
      <NavLink to="searchbar">
        <button>Search Movies</button>
      </NavLink>
      <Routes>
        <Route path="/moviesList" element={<TrendingList />} />
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
