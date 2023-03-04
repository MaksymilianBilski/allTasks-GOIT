import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import Feedback from 'componentsFeedback/Feedback';
import Phonebook from './pages/Phoneboook';
import ImagesFinder from './pages/ImagesFinder';
import MoviesFinder from './pages/MoviesFinder';
import Searchbar from './ComponentsImagesFinder/Searchbar/Searchbar';
import MovieDetails from './ComponentsMovieFinder/MovieDetails/MovieDetails';
import Cast from './ComponentsMovieFinder/Cast/Cast';
import Reviews from './ComponentsMovieFinder/Reviews/Reviews';
import TrendingList from './ComponentsMovieFinder/Home/TrendingList';
import Navigation from './Navigation/Navigation';
import { TaskManager } from './pages/TaskManager';

export class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/allTasks-GOIT" element={<Navigation />} />
          <Route path="allTasks-GOIT/quiz" element={<Quiz />} />
          <Route path="/allTasks-GOIT/phonebook" element={<Phonebook />} />
          <Route path="/allTasks-GOIT/feedback" element={<Feedback />} />
          <Route path="/allTasks-GOIT/images" element={<ImagesFinder />} />
          <Route path="/allTasks-GOIT/tasksManager" element={<TaskManager />} />
          <Route path="/allTasks-GOIT/movies" element={<MoviesFinder />}>
            <Route path="moviesList" element={<TrendingList />} />
            <Route path="searchbar" element={<Searchbar />} />
          </Route>
          <Route path="details/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    );
  }
}
