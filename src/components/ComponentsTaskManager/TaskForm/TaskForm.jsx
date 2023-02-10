import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksReducers';
import Button from 'components/common/Button/Button';
import { Form } from 'components/common/Form/Form';

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.add.value;
    dispatch(addTask(inputValue));
  };

  return (
    <Form
      handleFormSubmit={handleFormSubmit}
      type="text"
      name="add"
      placeholder="add your tasks..."
      children={<Button children="confirm" />}
    />
  );
};

export default TaskForm;
