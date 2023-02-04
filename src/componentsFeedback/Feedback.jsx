import { Component } from 'react';
import LeaveFeedback from './LeaveFeedback/LeaveFeedback';
import Section from './Section/section';
import StatisticList from './StatisticList/StatisticList';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleAddFeedback = evt => {
    const btnName = evt.target.textContent;
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedback();
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state).splice(0, 3);
    const result = values.reduce((acc, value) => {
      return (value += acc);
    }, 1);
    this.setState(() => {
      return { total: result };
    });
  };

  countPositiveFeedback = () => {
    const total = this.state.total + 1;
    const positive = this.state.good;
    if (total === 0) {
      return;
    }
    const result = positive / total;
    this.setState(() => {
      return { positiveFeedback: Number(result) };
    });
  };

  render() {
    return (
      <>
        <Section
          children={
            <LeaveFeedback
              handleClick={this.handleAddFeedback}
              state={this.state}
            />
          }
          name="Please leave feedback"
        />
        <Section
          children={<StatisticList state={this.state} />}
          name="Statistics"
        />
      </>
    );
  }
}

export default Feedback;
