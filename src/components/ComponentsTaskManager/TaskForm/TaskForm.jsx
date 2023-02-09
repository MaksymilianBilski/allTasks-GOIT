import Button from 'components/Button/Button';
import { Form } from 'components/Form/Form';

const TaskForm = () => {
  return (
    <Form
      type="text"
      name="add"
      placeholder="add your tasks..."
      children={<Button children="confirm" />}
    />
  );
};

export default TaskForm;
