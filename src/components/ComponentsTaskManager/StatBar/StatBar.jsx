import { getTasks } from '../redux/tasksSelectors';
import { useSelector } from 'react-redux';

const StatBar = () => {
  const tasks = useSelector(getTasks);
  const completedTasks = tasks.filter(el => el.completed).length;
  const incompletedTasks = tasks.filter(el => !el.completed).length;

  return (
    <section>
      <h3>Tasks</h3>
      <ul>
        <li>completed: {completedTasks}</li>
        <li>incompleted: {incompletedTasks}</li>
      </ul>
    </section>
  );
};

export default StatBar;
