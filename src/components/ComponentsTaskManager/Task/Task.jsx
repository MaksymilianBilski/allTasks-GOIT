import Button from 'components/common/Button/Button';
import { useDispatch } from 'react-redux';
import {
  toggleCompleted,
  deleteTask,
} from '../operations/operationsTaskManager';
import css from './Task.module.css';

const Task = ({ task, text, isCompleted }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(task));
  };

  const handleClose = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li key={task.id} className={css.listItem}>
      <span>{text}</span>
      <span>Completed: </span>

      <input onChange={handleToggle} type="checkbox" checked={isCompleted} />
      <Button handleClick={handleClose} children="X" />
    </li>
  );
};

export default Task;
