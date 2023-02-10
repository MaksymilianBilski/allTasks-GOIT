import Button from 'components/common/Button/Button';
import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteTask } from '../redux/tasksReducers';
import css from './Task.module.css';

const Task = ({ taskId, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(taskId));
  };

  const handleClose = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <li key={taskId} className={css.listItem}>
      <span>{text}</span>
      <span>Completed: </span>

      <input onChange={handleToggle} type="checkbox" checked={completed} />
      <Button handleClick={handleClose} children="X" />
    </li>
  );
};

export default Task;
