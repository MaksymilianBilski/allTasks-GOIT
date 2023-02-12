import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getFilters, getTasks } from '../redux/tasksSelectors';

const TasksList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilters);
  console.log(tasks);

  const getVisibleTasks = (tasks, filter) => {
    if (tasks === undefined || filter === undefined) {
      return;
    }
    switch (filter) {
      case 'completed':
        return tasks.filter(el => el.isCompleted === true);
      case 'active':
        return tasks.filter(el => el.isCompleted === false);
      case 'all':
        return tasks;
      default:
        return;
    }
  };

  const visibleTasks = () => {
    if (tasks === undefined) {
      return [];
    }
    return getVisibleTasks(tasks, filter);
  };

  return (
    <div>
      <h3>Task list</h3>
      <ul>
        {visibleTasks().map(el => (
          <Task text={el.text} task={el} isCompleted={el.isCompleted} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
