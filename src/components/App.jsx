import { Component } from 'react';
import { Button } from './Button/Button';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';

export class App extends Component {
  INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  buttonTypes = ['Good', 'Neutral', 'Bad', 'Total', 'Positive'];
  state = {
    ...this.INITIAL_STATE,
  };

  onClick = e => {
    const element = e.currentTarget.textContent.toLowerCase();
    this.setState(state => ({
      [element]: state[element] + 1,
    }));
    this.countTotal();
  };
  countTotal = () => {
    this.total = Object.values(this.state).reduce((pv, number) => {
      let total = 0;
      total = pv + number;
      return total;
    }, 0);
    return this.total;
  };

  countPositive = () => {
    this.positive = this.state.good / this.countTotal();
    return this.positive.toFixed(3);
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          {this.buttonTypes.slice(0, 3).map(el => {
            return <Button onClick={this.onClick} key={nanoid()} name={el} />;
          })}
        </Section>
        <Section title={'Statistics'}>
          {Object.values(this.state).some{el => el > 0} &&
            <Statistics
              positive={this.countPositive()}
              total={this.countTotal()}
              stats={this.buttonTypes}
              state={this.state}
            />
          }
        </Section>
      </div>
    );
  }
}
