import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LeaveFeedback from './LeaveFeedback/LeaveFeedback';
import Section from './Section/section';
import StatisticList from './StatisticList/StatisticList';

const Feedback = () => {
  const [stat, setStat] = useState({ good: 0, neural: 0, bad: 0 });
  const [total, setTotal] = useState();
  const [positive, setPositive] = useState();

  const handleAddFeedback = evt => {
    const btnName = evt.target.textContent;
    setStat(prevState => {
      return { ...prevState, [btnName]: prevState[btnName] + 1 };
    });
    countTotalFeedback();
    countPositiveFeedback();
  };

  const countTotalFeedback = () => {
    const values = Object.values(stat);
    const result = values.reduce((acc, value) => {
      return (value += acc);
    }, 1);
    setTotal(result);
  };

  const countPositiveFeedback = () => {
    const valueTotal = total + 1;
    const positive = stat.good;
    if (valueTotal === 0 || isNaN(valueTotal)) {
      return;
    }
    const result = positive / valueTotal;
    setPositive(Number(result));
  };

  return (
    <>
      <NavLink to="/allTasks-GOIT">HOMEPAGE</NavLink>
      <Section
        children={
          <LeaveFeedback handleClick={handleAddFeedback} state={stat} />
        }
        name="Please leave feedback"
      />
      <Section
        children={<StatisticList state={{ ...stat, total, positive }} />}
        name="Statistics"
      />
    </>
  );
};

export default Feedback;
