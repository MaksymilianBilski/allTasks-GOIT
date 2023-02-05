import { nanoid } from 'nanoid';
import Button from 'componentsFeedback/Button/Button';

const LeaveFeedback = ({ state, handleClick }) => {
  const stats = Object.keys(state);
  const list = stats.map(el => (
    <Button
      handleClick={handleClick}
      type={'button'}
      name={el}
      key={nanoid()}
    />
  ));

  return <div>{list}</div>;
};

export default LeaveFeedback;
