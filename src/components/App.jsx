import { Component } from 'react';
import Feedback from 'componentsFeedback/Feedback';
import Phonebook from './ComponentsPhonebook/Phoneboook';
import ImagesFinder from './ComponentsImagesFinder/ImagesFinder';
import MoviesFinder from './ComponentsMovieFinder/MoviesFinder';

export class App extends Component {
  render() {
    return (
      <div>
        <Feedback />
        <Phonebook />
        {/* <ImagesFinder /> */}
        <MoviesFinder />
      </div>
    );
  }
}
