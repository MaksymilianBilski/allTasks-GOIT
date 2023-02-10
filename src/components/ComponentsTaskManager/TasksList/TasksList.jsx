import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getFilters, getTasks } from '../redux/tasksSelectors';

const TasksList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilters);

  const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter(el => el.completed === true);
      case 'active':
        return tasks.filter(el => el.completed === false);
      case 'all':
        return tasks;
      default:
        return;
    }
  };

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <div>
      <h3>Task list</h3>
      <ul>
        {visibleTasks.map(el => (
          <Task text={el.text} taskId={el.id} completed={el.completed} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
