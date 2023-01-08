import { Component } from 'react';
import { Button } from './Button/Button';

export class App extends Component {
  INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonTypes = ['Good', 'Neutral', 'Bad'];

  state = {
    ...this.INITIAL_STATE,
  };
  render() {
    return (
      <div>
        {this.buttonTypes.map(el => {
          return <Button name={el} />;
        })}
      </div>
    );
  }
}
