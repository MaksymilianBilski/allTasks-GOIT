import { NavLink, Route, Routes } from 'react-router-dom';
import TrendingList from '../ComponentsMovieFinder/Home/TrendingList';
import MovieDetails from '../ComponentsMovieFinder/MovieDetails/MovieDetails';
import Reviews from '../ComponentsMovieFinder/Reviews/Reviews';
import Cast from '../ComponentsMovieFinder/Cast/Cast';
import Searchbar from '../ComponentsMovieFinder/SearchMovies/Searchbar';

const MoviesFinder = () => {
  return (
    <div>
      <NavLink to="/allTasks-GOIT">HOMEPAGE</NavLink>
      <NavLink to="searchbar">
        <button>Search Movies</button>
      </NavLink>
      <Routes>
        <Route path="moviesList" element={<TrendingList />} />
        <Route path="searchbar" element={<Searchbar />} />
        <Route path="details/movieId" element={<MovieDetails />} />
        <Route path="credits" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default MoviesFinder;
