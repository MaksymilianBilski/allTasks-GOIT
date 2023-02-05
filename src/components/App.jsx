import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Feedback from 'componentsFeedback/Feedback';
import Phonebook from './ComponentsPhonebook/Phoneboook';
import ImagesFinder from './ComponentsImagesFinder/ImagesFinder';
import MoviesFinder from './ComponentsMovieFinder/MoviesFinder';

export class App extends Component {
  render() {
    return (
      <div>
        <NavLink to="/react-01-goit">HOMEPAGE</NavLink>
        <Feedback />
        <Phonebook />
        <ImagesFinder />
        <MoviesFinder />
      </div>
    );
  }
}
